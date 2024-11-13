import React from "react";
import { BrowserRouter, createBrowserRouter, Navigate, Outlet, redirect, Route, RouterProvider, Routes } from "react-router-dom";
import HomeComponent from "./Paginas/Home";
import MatchComponent from "./Paginas/Match";
import Login from "./Paginas/Login";
import PersonComponent from "./Componentes/PersonComponent";
import Layout from "./Componentes/Layout";
import { useSelector } from "react-redux";

const RutaDeclarativaProvider = () => {
    return  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* rutas protegidas */}
          <Route element={<PrivateRoutes />}>
            <Route index element={<HomeComponent />} />
            <Route path="/match">
              <Route index element={<MatchComponent/>}/>
              <Route path=":id" element={<PersonComponent/>} />
            </Route>
          </Route>
          {/* ruta publica */}
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
}

const PrivateRoutes = ( { children, ...rest }) => {
  const usuario = useSelector(state => state.usuarioReducer.usuario)
  console.log(usuario)
  const isAuth = Object.keys(usuario).length > 0
  if(isAuth){
    return <Outlet {...rest} />
  }else{
    return <Navigate to={"/login"} replace />
  }
}

export default RutaDeclarativaProvider