import React from "react"
import { useSelector } from "react-redux"
import LoginComponent from "./pages/Login"
import HomeComponent from "./pages/Home"
const UsuarioComponent = () => {
    const usuario = useSelector(state => state.usuarioReducer.usuario)
    if(Object.keys(usuario).length > 0){
        return <HomeComponent />
    }
    return <LoginComponent />
}

export default UsuarioComponent