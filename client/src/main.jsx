
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './page/authentication/Login.jsx'
import Signup from './page/authentication/signup.jsx'
import { store } from './store/store.js'
import {Provider} from 'react-redux'
import Home from './page/home/Home.jsx'
import ProtectedRoute from './components/utilities/ProtectedRoute.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <ProtectedRoute>
        <Home/>
      </ProtectedRoute>,

    },
    {
     path:"/login",
     element:<Login/>

    },
    {
     path: "/signup",
      element: <Signup/>,

    },
  ],
);



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <App />
   <RouterProvider router = {router}>
    
   </RouterProvider>
  </Provider>
  
   
  
)
