import React from 'react'
import * as styles from './index.module.css'
class Menu extends React.Component{
    constructor(props){
        super(props)
        console.log("-------------- CONSTRUCTOR --------")
    }
    state = {
        nombre: ""
    }

    componentWillMount = ()=>{
        console.log("---------------- SERA MONTADO -----------------")
    }
//render
    componentDidMount = () => {
        console.log("---------------- SE MONTÓ -----------------")
    }

    shouldComponentUpdate = (futuroProps, futuroState) => {
        console.log("---------------- SE VA A ACTUALIZAR -----------------")
        console.log("PROPS FUTURO", futuroProps)
        console.log("STATE FUTURO", futuroState)
        console.log("PROPS actual", this.props)
        console.log("STATE actual", this.state)
        return (futuroState.nombre.length>3)
    }
    //render 2 (updates)
    componentDidUpdate = (prevProps, prevState) => {
        console.log("---------------- SE ACTUALIZÓ -----------------")
        console.log("PROPS PREVIO", prevProps)
        console.log("STATE PREVIO", prevState)
        console.log("PROPS actual", this.props)
        console.log("STATE actual", this.state)

    }

    

    componentWillUnmount = () => {
        console.log("---------------- SE VA A DESMONTAR -----------------")
    }
//destroy

    componentDidCatch = (err) => {
        
    }

    handleInput = (evt) => {
        evt.preventDefault()
        const nombreEstado = evt.target.value
        this.setState({
            nombre: nombreEstado
        })
    }
    render(){
        const {name, darkMode } = this.props
        return <nav  id='menu-principal' className={`full-ancho ${(darkMode)?"fondo-dark":"fondo-claro"} ${styles.menu}`} >
            <h3 className={this.props.className}>Hola {name} {this.state.nombre}</h3>
            <input id='nombre' name="nombre" autoComplete={"no"} onInput={this.handleInput} />
            <ul style={this.props.style}>
                <li><a>Inicio</a></li>
                <li><a>Acerca de mi</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </nav>
    }
}

export default Menu