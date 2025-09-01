import React from "react";
import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  const { userProfile, selectedUser } = useSelector((state) => state.userReducer);

  return (
    <div>
      <div
        className={`chat ${
          userProfile?._id === messageDetails?.senderId
            ? "chat-end"
            : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src={
                userProfile?._id === messageDetails?.senderId
                  ? userProfile?.avatar
                  : selectedUser?.avatar 
              }
            />
          </div>
        </div>

        <div className="chat-bubble">{messageDetails?.message}</div>
      </div>
    </div>
  );
};

export default Message;
