import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../../components/axiosinstance";

// ✅ Send Message
export const sendMessageThunk = createAsyncThunk(
  "message/send",
  async ({ receiverId, message }, { rejectWithValue }) => {
    console.log(receiverId, message); // optional debug log

    try {
 
     const response = await axiosInstance.post(`/message/sendMessage/${receiverId}`, { message });
     
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput || "Failed to send message");
      return rejectWithValue(errorOutput);
    }
  }
);

// ✅ Get Messages
export const getMessageThunk = createAsyncThunk(
  "message/get",
  async ({ receiverId }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/message/getMessage/${receiverId}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      const errorOutput = error?.response?.data?.errMessage;
      toast.error(errorOutput || "Failed to get messages");
      return rejectWithValue(errorOutput);
    }
  }
);
