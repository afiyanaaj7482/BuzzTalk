// api related work
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../components/axiosinstance";

//login
export const loginUserThunk = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("user/login", {
        username,
        password,
      });
      toast.success("Login Sucessful")
      return response.data;
    } catch (error) {
      console.log(error?.response?.data?.errMessage);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);

//register
export const registerUserThunk = createAsyncThunk(
  "user/signup",
  async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    console.log(fullName, username, password, gender)
    try {
      const response = await axiosInstance.post("user/register", {
        fullName,
        username,
        password,
        gender,
      });
       toast.success("Account created Sucessfuly")

      return response.data;
    } catch (error) {
      console.log(error?.response?.data?.errMessage);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);

//logout
export const logoutUserThunk = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/logout");
      toast.success("Logout successfull!!");
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput);
      return rejectWithValue(errorOutput);
    }
  }
);
// getUser
export const getUserProfileThunk = createAsyncThunk(
  "user/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/getProfile");
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      return rejectWithValue(errorOutput);
    }
  }
);

// getOtherUsers
export const getOtherUsersThunk = createAsyncThunk(
  "user/getOtherUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/user/getOtherUsers");
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      return rejectWithValue(errorOutput);
    }
  }
);
