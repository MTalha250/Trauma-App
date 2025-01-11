import React, { useState, useEffect } from "react";
import { Search, Loader } from "lucide-react"; // Assuming Loader icon for progress
interface SidebarProps {
  users: { id: number; name: string; message: string; image: string; hasUnreadMessages: boolean }[];
  selectedUser: number | null;
  onSelectUser: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ users, selectedUser, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleDebouncedSearch = setTimeout(() => {
      setLoading(true);

      // Simulate a slight delay for better UX
      const newFilteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredUsers(newFilteredUsers);
      setLoading(false);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(handleDebouncedSearch); // Clean up the timeout on unmount or new input
  }, [searchTerm, users]);

  return (
    <div className="w-full min-w-[350px] md:w-1/4 bg-white shadow-md p-4">
      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        {loading ? (
          <Loader className="absolute right-3 top-3 text-gray-500 w-4 h-4 animate-spin" />
        ) : (
          <Search className="absolute right-3 top-3 text-gray-500 w-4 h-4" />
        )}
      </div>

      {/* Users List */}
      <ul className="space-y-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100 transition ${
                selectedUser === user.id ? "bg-gray-100" : ""
              }`}
              onClick={() => onSelectUser(user.id)}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm">{user.name}</h3>
                  <p className="text-xs text-gray-500">{user.message}</p>
                </div>
              </div>
              {user.hasUnreadMessages && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  0
                </span>
              )}
            </li>
          ))
        ) : (
          <div className="text-center text-gray-500">No users found</div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
