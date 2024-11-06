import React, { createContext,useState } from "react";
// High Order Components

const JugadorContexto = createContext({})
function JugadorContextState(props){
    const [jugador, setJugador] = useState({})
    return <JugadorContexto.Provider value={{ jugador, setJugador }}>
        {props.children}
    </JugadorContexto.Provider>
}  

export { JugadorContexto }

export default JugadorContextState