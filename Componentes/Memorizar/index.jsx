import React, { useEffect, useState } from "react"
import './index.css'

const mazo = [
    {
        id: 1,
        value: "1 corazones",
        giro: false,
    },
    {
        id: 2,
        value: "2 corazones",
        giro: false,
    },
    {
        id: 3,
        value: "1 corazones",
        giro: false,
    },
    {
        id: 4,
        value: "2 corazones",
        giro: false,
    },
    {
        id: 5,
        value: "3 corazones",
        giro: false,
    },
    {
        id: 6,
        value: "3 corazones",
        giro: false,
    },
    {
        id: 7,
        value: "4 corazones",
        giro: false,
    },
    {
        id: 8,
        value: "4 corazones",
        giro: false,
    },
] 
const MemorizarJuego = () => {
    const [cartas, setCartas] = useState(mazo)
    const [primeraCarta, setPrimeraCarta] = useState(null)
    const [segundaCarta, setSegundaCarta] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [turno, setTurno] = useState(0)
    const [completo, setCompleto] = useState(false)
    const [nuevoJuego, setNuevoJuego] = useState(false)
    const revolverCartas = () => {
        const cartasSin = [...cartas]
        for (let i = cartasSin.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartasSin[i], cartasSin[j]] = [cartasSin[j], cartasSin[i]];
          }
        return cartasSin
    }

    const resetCards = () => {
        setDisabled(false)
        setPrimeraCarta(null)
        setSegundaCarta(null)
    }

    const reiniciarJuego = async () => {
        resetCards()
        const nuevoJuego= cartas.map((carta)=> { return {...carta, giro:false } })
        setCartas(nuevoJuego)
        setDisabled(false)
        setTurno(0)
        setCompleto(false)
        setNuevoJuego(true)
    }

    useEffect(()=>{
        const cartasRevueltas = revolverCartas();
        setCartas(cartasRevueltas);
    },[])

    useEffect(()=>{
        if(cartas && cartas.every((carta)=> carta.giro)){
            setCompleto(true)
        }
    },[turno])

    useEffect(()=>{
        if(nuevoJuego){
            const cartasRevueltas = revolverCartas();
            setCartas(cartasRevueltas);
            setNuevoJuego(false)
        }
    },[nuevoJuego])

    useEffect(()=>{
        if(segundaCarta){
            const pareja = primeraCarta.value == segundaCarta.value
            if(!pareja){
                setTimeout(()=>{
                    setGiro(primeraCarta,false);
                    setGiro(segundaCarta,false);
                    resetCards()
                }, 1000)
            }else{
                resetCards()
            }
            setTurno(turno+1)
        }
    },[segundaCarta])

    const setGiro = (carta, giro) => {
        let cartaGiro = cartas.findIndex((card)=> card.id === carta.id )
        let tempCartas = cartas
        tempCartas[cartaGiro].giro=giro
        setCartas(tempCartas)
    }

    const handleClick = (carta) => {
        if(carta.giro || disabled){
            return
        }
        if(!primeraCarta){
            setPrimeraCarta(carta)
            setGiro(carta, true)
            return
        }
        setSegundaCarta(carta)
        setGiro(carta, true)
        setDisabled(true)
    }

    return <div>
        <h1>Juego de Memoria</h1>
        <h2>Turno: {turno}</h2>
        {completo && <div className="success-message">Felicitaciones has completado el juego en {turno} Turnos, quieres mejorar tu marca? <button onClick={reiniciarJuego}>Reiniciar</button></div>}
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)"
        }}>
            {cartas && cartas.map((carta, idx) => {
                return <div key={carta.id}
                    className="flip"
                    onClick={()=> handleClick(carta)}
                >
                    {carta.giro && <div className="frente">{carta.value}</div>}
                   {!carta.giro && <div className="tapa"></div>}
                </div>
            })}
        </div>
    </div> 
}

export default MemorizarJuego