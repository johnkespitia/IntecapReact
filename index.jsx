import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Componentes/Menu";
import MemorizarJuego from "./Componentes/Memorizar";
import JuegoContexto from "./JuegoContexto";
import HeroComponent from "./Componentes/Hero";
import FormularioComponente from "./Componentes/Formulario";
import JugadorContextState from "./JugadorContexto";
import PerfilComponente from "./Componentes/Perfil";
function App() {
	const [marcadores, setMarcadores] = useState([]);
	const addMarcador = (marcador) => {
        setMarcadores([...marcadores, marcador]);
        console.log({marcadores});
	};
    
	/*
    {
        turnos: 1,
        dificultad: 4,
        nick: '',
    }
    */
	return (
		<JugadorContextState>
			<JuegoContexto.Provider value={{ marcadores, addMarcador }}>
				<Menu
					name="John Espitia"
					darkMode={false}
					className="red"
					style={{
						backgroundColor: "#CCC54D",
					}}
				/>
				<FormularioComponente />
				<PerfilComponente />
				<hr/>
				<MemorizarJuego />
				<HeroComponent />
			</JuegoContexto.Provider>
		</JugadorContextState>
	);
}
export default App;
