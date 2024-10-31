import React, { useState } from "react";
import Menu from "./Componentes/Menu";
import MemorizarJuego from "./Componentes/Memorizar";
import JuegoContexto from "./JuegoContexto";
import HeroComponent from "./Componentes/Hero";
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
		<JuegoContexto.Provider value={{ marcadores, addMarcador }}>
			<Menu
				name="John Espitia"
				darkMode={false}
				className="red"
				style={{
					backgroundColor: "#CCC54D",
				}}
			/>
			<MemorizarJuego />
			<HeroComponent />
		</JuegoContexto.Provider>
	);
}
export default App;
