import React from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../store/slice/user/user.thunk";

const UserSidebar = () => {
   const dispatch = useDispatch();
   const handleLogout = async () => {
   await dispatch(logoutUserThunk())
   }
  
  return (
    <div className="max-w-[20em] h-screen w-full  flex flex-col border-r border-r-white/10">
      <div className="w-full bg-black mb-3 px-2 py-1 text-[#605DFF] text-xl font-semibold rounded-lg ">
        <h1>chit chat</h1>
      </div>
      <div>
        <label className="input">
          <input type="search" className="grow" placeholder="Search" />
          <FaSearch />
        </label>
      </div>
      <div className="h-full overflow-y-scroll px-3">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        
      </div>
      <div className="flex item-center justify-between p-3">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button onClick={handleLogout} className="btn btn-primary btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;
