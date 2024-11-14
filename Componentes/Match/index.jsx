import { Button } from "react-bootstrap";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
const MatchComponent = (props) => {
    const [persona, setPersona] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const genero = searchParams.get('genero')
    const obtenerPersona = useCallback(async() => {
        let url = 'https://randomuser.me/api'
        if(genero){
            url ='https://randomuser.me/api?gender='+genero 
        }
        const response = await fetch(url)
        console.log(response)
        const data =  await response.json()
        console.log(data)
        setPersona(data.results[0])
    },[genero])

    useEffect(()=>{
        obtenerPersona()
        
    },[obtenerPersona])

    return <>
    <h1>Encuentra tu media naranja </h1>
    <Button onClick={()=>{ navigate('/match?genero=male') }}>Hombre</Button>
    <Button onClick={()=>{ navigate('/match?genero=female') }}>Mujer</Button>
    <Button onClick={()=>{ obtenerPersona()} }>cambiar Persona</Button>
    </>
}
export default MatchComponent