import React from "react";
import { useSelector } from "react-redux";

const Message = ({messageDetails}) => {
  console.log(messageDetails);

  const { userProfile} = useSelector(state=>state.userReducer);
  console.log( userProfile)
  
  return (
    <div>
      <div className={`chat ${
          userProfile?._id === messageDetails?.senderId
            ? "chat-end"
            : "chat-start"
        }`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
       
        <div className="chat-bubble">{messageDetails?.message}</div>
    
      </div>
     
  
      </div>
   
  );
};

export default Message;
