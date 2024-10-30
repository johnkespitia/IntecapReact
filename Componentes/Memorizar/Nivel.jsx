import React from "react"
const NivelComponente = (props) => {
    return <div>
        <h3>Dificultad: <select onChange={props.handleDificultad}>
            <option value={8}>facil (4 parejas)</option>
            <option value={16}>medio (8 parejas)</option>
            <option value={32}>dificil (16 parejas)</option>
            </select></h3>
    </div>
}

export default NivelComponente