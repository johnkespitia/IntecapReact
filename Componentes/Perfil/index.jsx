import React, {useContext} from "react";
import { JugadorContexto } from "../../JugadorContexto";
function PerfilComponente(){
    const {jugador} = useContext(JugadorContexto)
    return <div>
        <h2>Nombre {jugador.nombre}</h2>
    </div>
}

export default PerfilComponente