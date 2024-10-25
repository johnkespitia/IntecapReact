import React, { useEffect, useState } from "react"
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

    const handleClick = (carta) => {
        if(!primeraCarta){
            setPrimeraCarta(carta)
            return
        }
        setSegundaCarta(carta)
        const pareja = primeraCarta.value == segundaCarta.value

        if(pareja){
            let cartasCopia = cartas
            let primera = cartasCopia.findIndex((card)=> card.id === primeraCarta.id )
            let segunda = cartasCopia.findIndex((card)=> card.id === segundaCarta.id )
            cartasCopia[primera].giro=true
            cartasCopia[segunda].giro=true
            setCartas(cartasCopia)
        }else{
            setPrimeraCarta(null)
            setSegundaCarta(null)
        }
        setTurno(turno+1)
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
                    className={carta.giro?'flip':''}
                    onClick={()=> handleClick(carta)}
                >
                    <div className="frente">{carta.value}</div>
                    <div className="tapa"></div>
                </div>
            })}
        </div>
    </div> 
}

export default MemorizarJuego