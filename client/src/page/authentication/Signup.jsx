import React, { useEffect, useState, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/user.thunk";
import toast from "react-hot-toast"; // Add this impor
import authDataContext from "../../context/authContext";


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { serverUrl } = useContext(authDataContext); // Get serverUrl from context

  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password and confirm password do not match");
    }

    try {
      const response = await dispatch(registerUserThunk(signupData));
      
      if (response.payload?.success) {
        toast.success("Account created successfully!");
        navigate("/");
      } else {
        toast.error(
          response.payload?.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    }
  };


  return (
    <div>
      <div className="flex justify-center items-center p-6 min-h-screen">
        <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h1 className="text-2xl">Please Signup..!!</h1>
         
          {/* Full Name */}
          <label className="input input-bordered w-full flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              name="fullName"
              className="grow"
              placeholder="Full Name"
              value={signupData.fullName}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Username */}
          <label className="input input-bordered w-full flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Username"
              value={signupData.username}
              onChange={handleInputChange}
              required
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
              value={signupData.password}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Confirm Password */}
          <label className="input input-bordered w-full flex items-center gap-2">
            <FaKey />
            <input
              type="password"
              name="confirmPassword"
              className="grow"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Gender */}
          <div className="input input-bordered w-full flex gap-6 items-center p-2">
            <label htmlFor="male" className="flex items-center gap-2">
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                className="radio"
                checked={signupData.gender === "male"}
                onChange={handleInputChange}
                required
              />
              Male
            </label>
            <label htmlFor="female" className="flex items-center gap-2">
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                className="radio"
                checked={signupData.gender === "female"}
                onChange={handleInputChange}
                required
              />
              Female
            </label>
          </div>

          <button onClick={handleSignup} className="btn btn-primary">
            Sign Up
          </button>

          <p>
            Already have an account? &nbsp;
            <Link to="/login" className="text-blue-400 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;