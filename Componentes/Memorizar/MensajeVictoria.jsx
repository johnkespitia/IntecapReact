import React from "react"
const MensajeVictoriaComponente = ({ completo, turno, reiniciarJuego }) => {
    if(completo){
        return <div className="success-message">
            Felicitaciones has completado el juego en {turno} Turnos, quieres mejorar tu marca? 
            <button onClick={reiniciarJuego}>Reiniciar</button>
        </div>
    }
    
}
export default MensajeVictoriaComponente