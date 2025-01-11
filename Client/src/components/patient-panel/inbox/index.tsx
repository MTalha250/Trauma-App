// inbox/index.tsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatBox from "./ChatBox";
import usersData from "@/data/messages.json";

interface Chat {
  id: number;
  text: string;
  date: string;
  userImage: string;
  type: "incoming" | "outgoing";
}

interface User {
  id: number;
  name: string;
  message: string;
  image: string;
  hasUnreadMessages: boolean;
  chats: Chat[];
}

const Inbox: React.FC = () => {
    const [users, setUsers] = useState<User[]>(usersData as User[]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const handleSendMessage = (newMessage: string) => {
    if (selectedUser && newMessage.trim()) {
      // Create a new outgoing message
      const newChat = {
        id: selectedUser.chats.length + 1,
        text: newMessage.trim(),
        date: new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }).format(new Date()),
        userImage: "/src/assets/user.jpg",
        type: "outgoing" as "outgoing",
      };
  
      // Update the selected user's chat list
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id
          ? { ...user, chats: [...user.chats, newChat] }
          : user
      );
  
      setUsers(updatedUsers);
    }
  };
  
  
  return (
    <div className="p-5 sm:p-10 min-h-screen w-full lg:w-4/4">
      <div className="p-5 bg-white border">
        <h2 className="text-left font-prata text-lg font-light">Messages</h2>
      </div>
      <div className="flex-col flex md:flex-row bg-gray-50 shadow-xl min-h-screen">
        <Sidebar
          users={users}
          selectedUser={selectedUserId}
          onSelectUser={setSelectedUserId}
        />
        {selectedUser ? (
          <ChatBox chats={selectedUser.chats} onSendMessage={handleSendMessage} />
        ) : (
          <div className="w-3/4 flex items-center justify-center">
            <p className="text-gray-500">Select a user to view messages</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
