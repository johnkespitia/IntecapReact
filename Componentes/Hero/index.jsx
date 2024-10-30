import React, { useContext } from 'react'
import JuegoContexto from '../../JuegoContexto'
const HeroComponent = () => {
    const { marcadores } = useContext(JuegoContexto)
    return <div className="full-ancho">
        <h2>Marcadores</h2>
        <ul>
            {marcadores.map((m, idx)=> <li key={idx}>{m.nickname}: {m.turnos} Turnos [Dificultad: {m.dificultad} cartas] </li>)}
        </ul>
    </div>
}
export default HeroComponent