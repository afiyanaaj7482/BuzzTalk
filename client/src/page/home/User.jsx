import React from "react";

const User = () => {
  return (
    <div className="flex gap-5 item-center">
    <div className="avatar avatar-online">
      <div className="w-12 rounded-full">
        <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
      </div>
    </div>
    <div>
    <h2 className="line-clamp-1">Fullname</h2>
    <p  className="text-xs">UserNAme</p>
    </div>
    </div>
  );
};

export default User;
