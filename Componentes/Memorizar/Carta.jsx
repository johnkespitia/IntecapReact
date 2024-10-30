import React from "react"
const CartaComponente = (props) =>{
    return <div
        className="flip"
        onClick={()=> props.handleClick(props.carta)}
    >
        {(props.carta.giro==true) && <div className="frente">{props.carta.value}</div>}
        {!props.carta.giro && <div className="tapa"></div>}
    </div>
}

export default CartaComponente