

// import axios from "axios";

// const DB_URL = import.meta.env.VITE_DB_URL;

// export const axiosInstance = axios.create({
//   baseURL: DB_URL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json", // ✅ Fixed here
//   }, 
// });



import axios from "axios";

// Environment variable for backend URL
const DB_URL = import.meta.env.VITE_DB_URL;

export const axiosInstance = axios.create({
  baseURL: DB_URL, // e.g., http://localhost:3000/api/v1
  withCredentials: true, // if you're using cookies for auth
  headers: {
    "Content-Type": "application/json",
  },
});

