import React, { useEffect, useState } from "react"
import './index.css'
const MemorizarJuego = () => {
    const [cartas, setCartas] = useState([
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
    ])
    const [primeraCarta, setPrimeraCarta] = useState(null)
    const [segundaCarta, setSegundaCarta] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [turno, setTurno] = useState(0)

    const revolverCartas = () => {
        const cartasSin = [...cartas]
        return cartasSin
    }

useEffect(()=>{
    console.log("giro cartas")
},[cartas])
useEffect(()=>{
    if(segundaCarta){
        console.log("giro carta 2")
        const pareja = primeraCarta.value == segundaCarta.value
        if(!pareja){
            setTimeout(()=>{
                setGiro(primeraCarta,false);
                setGiro(segundaCarta,false);
                setPrimeraCarta(null)
                setSegundaCarta(null)
                setDisabled(false)
            }, 1000)
            
        }else{
            setDisabled(false)
        }
        setTurno(turno+1)
    }
},[segundaCarta])

    const setGiro = (carta, giro) => {
        let cartaGiro = cartas.findIndex((card)=> card.id === carta.id )
        let tempCartas = cartas
        tempCartas[cartaGiro].giro=giro
        console.log(tempCartas)
        setCartas(tempCartas)
    }

    const handleClick = (carta) => {
        if(carta.giro || disabled){
            return
        }
        if(!primeraCarta){
            setPrimeraCarta(carta)
            setGiro(carta, true)
            console.log("primera")
            return
        }
        setSegundaCarta(carta)
        setGiro(carta, true)
        console.log("segunda")
        setDisabled(true)
    }

    useEffect(()=>{
        const cartasRevueltas = revolverCartas();
        setCartas(cartasRevueltas);
        console.log(cartasRevueltas)
    },[])

    return <div>
        <h1>Juego de Memoria</h1>
        <div style={{
            display: "grid",
            gridTemplate: ""
        }}>
            {cartas.map((carta, idx) => {
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