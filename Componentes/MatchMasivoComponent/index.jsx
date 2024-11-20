import React from "react"
import {useGetPersonasQuery} from '../../Api/api'
import { Col, Container, Row, Spinner } from "react-bootstrap"
import { useDispatch } from "react-redux"
import PersonaCard from "../Match/PersonaCard"
import { Button } from "react-bootstrap"
const MatchMasivoComponent = () => {
    const dispatch = useDispatch()
    const {data, isLoading, error, refetch} = useGetPersonasQuery()
    const match = () => {
        dispatch(addAceptado(persona))
        obtenerPersona()
    }
    const dismatch = () => {
        dispatch(addRechazado(persona))
        obtenerPersona()
    }

    const ultimoMatch = () => {
        useDispatch(getUltimoMatch(persona))
    }
    if(isLoading){
        return <Spinner />
    }
    return <>
    <Button onClick={refetch} >Recargar</Button>
    <Container>
        <Row>
            {data.results.map((p)=>{
                return <Col sm="2" md="3" lg="4" className="mb-3"><PersonaCard persona={p} match={match} dismatch={dismatch} ultimoMatch={ultimoMatch}/></Col>
            })}
        </Row>
    </Container></>
}
export default MatchMasivoComponent