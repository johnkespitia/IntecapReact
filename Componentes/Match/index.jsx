import { Button } from "react-bootstrap";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import PersonaCard from "./PersonaCard";
import { addAceptado, addPersona, addRechazado, getUltimoMatch } from "../../store";
const MatchComponent = (props) => {
    const [persona, setPersona] = useState(null)
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

    const obtenerPersona = useCallback(async() => {
        let url = 'https://randomuser.me/api'
        if(genero){
            url ='https://randomuser.me/api?gender='+genero 
        }
        const response = await fetch(url)
        const data =  await response.json()
        setPersona(data.results[0])
        dispatch(addPersona(data.results[0]))
    },[genero])

    useEffect(()=>{
        obtenerPersona()
    },[obtenerPersona])

    return <>
    <div className="d-flex flex-column justify-content-center align-items-center">
    <h1>Encuentra tu media naranja </h1>
    <div className=" d-flex gap-2 m-4">
        <Button onClick={()=>{ navigate('/match?genero=male') }}>Hombre</Button>
        <Button onClick={()=>{ navigate('/match?genero=female') }}>Mujer</Button>
        <Button onClick={()=>{ obtenerPersona()} }>cambiar Persona</Button>
    </div>
    {persona && <PersonaCard persona={persona} match={match} dismatch={dismatch} ultimoMatch={ultimoMatch}/>}
    </div>
    </>
}
export default MatchComponent