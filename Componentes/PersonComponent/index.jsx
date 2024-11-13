import React from "react";
import {useParams } from "react-router-dom";

const PersonComponent = () => {
    const { id } = useParams()
    return <h1>Persona: {id}<br/>
    <a onClick={redireccionar}>Rematch</a>
    <br/>
    <a onClick={atras}>Regresar</a>
    </h1>
}

export default PersonComponent