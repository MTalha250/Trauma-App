import React, { useState, useEffect, useRef } from "react";
import { Smile } from "lucide-react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface Chat {
  id: number;
  text: string;
  date: string;
  userImage: string;
  type: "incoming" | "outgoing";
}

interface ChatBoxProps {
  chats: Chat[];
  onSendMessage: (newMessage: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ chats, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom whenever chats are updated
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji); // Append the selected emoji to the message
  };

  return (
    <div className="w-3/4 p-4 flex flex-col h-screen">
      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto flex flex-col pb-4">
        {chats.length > 0 ? (
          chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center space-x-4 mt-2 ${
                chat.type === "outgoing" ? "justify-end" : ""
              }`}
            >
              {chat.type === "incoming" && (
                <img
                  src={chat.userImage}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div
                className={`p-3 rounded-lg text-sm max-w-xs break-words ${
                  chat.type === "incoming"
                    ? "bg-gray-100 text-left"
                    : "bg-primary text-white text-right"
                }`}
              >
                {chat.text}
                <span
                  className={`block text-xs  ${
                    chat.type === "incoming"
                      ? "text-gray-400"
                      : "text-orange-100"
                  }  mt-1`}
                >
                  {chat.date}
                </span>
              </div>
              {chat.type === "outgoing" && (
                <img
                  src={chat.userImage}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="text-gray-500">No messages to display</p>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Message input box */}
      <div className="flex items-center border-t p-4 relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message here"
          className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary transition"
        >
          Send
        </button>
        <div className="relative">
          <Smile
            className="ml-3 text-gray-500 w-6 h-6 cursor-pointer"
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          />
          {showEmojiPicker && (
            <div className="absolute bottom-12 right-0 z-10">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
