import { Button, Spinner } from "react-bootstrap";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import PersonaCard from "./PersonaCard";
import { addAceptado, addPersona, addRechazado, getUltimoMatch, addPersonaAsync } from "../../store";
const MatchComponent = (props) => {
    // const [persona, setPersona] = useState(null)
    const personas = useSelector((state)=>state.personasReducer.personas)
    const loading = useSelector((state)=>state.personasReducer.personaLoading)
    const persona = personas[personas.length-1].results[0]
    console.log(persona)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const genero = searchParams.get('genero')

    const match = () => {
        dispatch(addAceptado(persona))
        obtenerPersona()
    }
    const dismatch = () => {
        dispatch(addRechazado(persona))
        obtenerPersona()
    }

    const ultimoMatch = () => {
        dispatch(getUltimoMatch(persona))
    }

    const obtenerPersona = () => {
        dispatch(addPersonaAsync(genero))
    }

    useEffect(()=>{
        obtenerPersona()
    },[])

    return <>
    <div className="d-flex flex-column justify-content-center align-items-center">
    <h1>Encuentra tu media naranja </h1>
    <div className=" d-flex gap-2 m-4">
        <Button onClick={()=>{ navigate('/match?genero=male') }}>Hombre</Button>
        <Button onClick={()=>{ navigate('/match?genero=female') }}>Mujer</Button>
        <Button onClick={()=>{ obtenerPersona()} }>cambiar Persona</Button>
    </div>
    {loading && <Spinner />}
    {!loading && persona && <PersonaCard persona={persona} match={match} dismatch={dismatch} ultimoMatch={ultimoMatch}/>}
    </div>
    </>
}
export default MatchComponent