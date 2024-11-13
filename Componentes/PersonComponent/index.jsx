import React from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

const PersonComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const { id } = useParams()
    const location = useLocation()
    console.log(location)
    const navigator = useNavigate()
    const redireccionar = () =>{
        navigator("/match")
    }
    const atras = () =>{
        navigator("../..",{ relative:"path" })
    }
    return <h1>Persona: {id}<br/>
    <a onClick={redireccionar}>Rematch</a>
    <br/>
    <a onClick={atras}>Regresar</a>
    </h1>
}

export default PersonComponent