import React from "react";
import User from "./User";
import Message from "./Message";
import { IoMdSend } from "react-icons/io";
import { useSelector } from "react-redux";

const MessageContainer = () => {
    const { selectedUser } = useSelector((state) => state.userReducer);
  return (
    <div className="h-screen w-full flex flex-col">
      {/* Top User Bar */}
      <div className="px-3 py-3 border-b border-b-white/10">
        <User userDetails={selectedUser}/>
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-3">
        <Message />
      </div>

      {/* Input + Send Button */}
      <div className="w-full flex items-center gap-2 p-3 border-t border-white/10">
        <fieldset className="fieldset flex-grow">
          <input
            type="text"
            className="input w-full"
            placeholder="Type here"
          />
        </fieldset>
        <button className="btn btn-primary flex items-center justify-center">
          <IoMdSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;
