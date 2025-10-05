import React, { useEffect, useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/user.thunk";
import { IoEyeOutline, IoEye } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { isAuthenticated } = useSelector(
    (state) => state.userReducer
  );

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // Correct useEffect syntax and dependencies
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {

    const response = await dispatch(loginUserThunk(loginData));

    
    if (response.payload?.success) {
      toast.success("Logged in successfully!");
      navigate("/");
    } else {
      
      const errorMessage = response.payload?.message || "Login failed. Please check your credentials.";
      toast.error(errorMessage);
    }
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
     
<label className="input input-bordered w-full flex items-center gap-2 relative">
  <FaKey />
  {!show ? (
    <IoEyeOutline
      className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%] translate-y-1/2"
      onClick={() => setShow(true)}
    />
  ) : (
    <IoEye
      className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%] translate-y-1/2"
      onClick={() => setShow(false)}
    />
  )}
  <input
    type={show ? "text" : "password"}
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