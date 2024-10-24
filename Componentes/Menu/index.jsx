import React from 'react'
import * as styles from './index.module.css'
class Menu extends React.Component {
    constructor(props) {
        super(props);
        console.log("---CONSTRUCTOR---");
    }
    state = {
        nombre: ""
    }

    componentWillMount = () => {
        console.log("---SERA MONTADO---");
    }

    //---->Entre estos 2 momentos se renderiza el componente

    componentDidMount = () => {
        console.log("---SE MONTO---");
    }

    shouldComponentUpdate = (futuroProps, futuroState) => {
        console.log("---SE VA A ACTUALIZAR---");
        console.log("PROPS FUTURO", futuroProps);
        console.log("STATE FUTURO", futuroState);
        console.log("PROPS actual", this.props);
        console.log("STATE actual", this.state);

        return true;
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("---SE ACTUALIZO---");
        console.log("PROPS PREVIO", prevProps);
        console.log("STATE PREVIO", prevState);
        console.log("PROPS actual", this.props);
        console.log("STATE actual", this.state);
    }

    componentWillUnmount = () => {
        console.log("---SE VA A DESMONTOR---");
    }

    handleInput = (evt) => {
        evt.preventDefault();
        const nombreEstado = evt.target.value;
        this.setState({
            nombre: nombreEstado
        })
        //console.log(evt);
    }
    render() {
        const {name, darkMode} = this.props;
        return  <nav id='menu-principal' className={`full-ancho ${(darkMode)?"fondo-dark":"fondo-claro"} ${styles.menu}`}>
                    <h3>darkMode: {`${darkMode}`}</h3>
                    <h3>Hola {this.props.name}</h3>
                    <h3>input: {this.state.nombre}</h3>
                    <input id='nombre' type="text"
                        name="nombre" onInput={this.handleInput}
                        autoComplete="off" />
                    <ul style={this.props.style}>
                        <li><a>Inicio</a></li>
                        <li><a>Acerca de mi</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </nav>
    }
}

export default Menu;
