import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const PersonComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const { id } = useParams()
    console.log(searchParams)
    return <h1>Persona: {id}</h1>
}

export default PersonComponent