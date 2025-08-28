import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/user.thunk";

const Login = () => {
   const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    await dispatch(loginUserThunk(loginData));
      const response = await dispatch(loginUserThunk(loginData));
      console.log(response.payload?.success);
      navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center items-center p-6 min-h-screen">
        <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
          <h1 className="flex justify-start">Please log in..</h1>

          {/* Username */}
          <label className="input input-bordered w-full flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Username"
              value={loginData.username}
              onChange={handleInputChange}
            />
          </label>

          {/* Password */}
          <label className="input input-bordered w-full flex items-center gap-2">
            <FaKey />
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </label>

          <button onClick={handleLogin} className="btn btn-primary">
            Login
          </button>

          <p>
            Don't have an account? &nbsp;
            <Link to="/signup" className="text-blue-400 underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
