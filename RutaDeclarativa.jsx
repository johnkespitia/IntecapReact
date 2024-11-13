import React from "react";
import { BrowserRouter, createBrowserRouter, redirect, Route, RouterProvider, Routes } from "react-router-dom";
import HomeComponent from "./Paginas/Home";
import MatchComponent from "./Paginas/Match";
import Login from "./Paginas/Login";
import PersonComponent from "./Componentes/PersonComponent";
import Layout from "./Componentes/Layout";

const RutaDeclarativaProvider = () => {
    return  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="/match">
            <Route index element={<MatchComponent/>}/>
            <Route path=":id" element={<PersonComponent/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
}

export default RutaDeclarativaProvider