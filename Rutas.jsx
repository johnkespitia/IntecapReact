import React from "react";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import HomeComponent from "./Paginas/Home";
import MatchComponent from "./Paginas/Match";
import Login from "./Paginas/Login";

const rutas = createBrowserRouter([
    {
      path:"/",
      element: <HomeComponent />
    },
    {
      path:"/match",
      element: <MatchComponent />
    },
    {
        path:"/login",
        element: <Login />
    },
    {
      path:"/logout",
      action: (params) => {
        return () => {
          console.log("Cerrando sesion...")
          redirect("/")
        }
      }
  },
    {
      path: "*",
      element: <h1>No Encontrado</h1>
    }
  
  ])
const AppRouterProvider = () => {
    return  <RouterProvider router={rutas} />
}

export default AppRouterProvider