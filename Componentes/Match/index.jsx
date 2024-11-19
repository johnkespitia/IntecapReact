import { Button } from "react-bootstrap";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import PersonaCard from "./PersonaCard";
import { addAceptado, addPersona, addRechazado } from "../../store";
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
    <h1>Encuentra tu media naranja </h1>
    <Button onClick={()=>{ navigate('/match?genero=male') }}>Hombre</Button>
    <Button onClick={()=>{ navigate('/match?genero=female') }}>Mujer</Button>
    <Button onClick={()=>{ obtenerPersona()} }>cambiar Persona</Button>
    {persona && <PersonaCard persona={persona} match={match} dismatch={dismatch} />}
    </>
}
export default MatchComponent