import React from "react";
import MarcadorComponente from "./Marcador";
import NivelComponente from "./Nivel";
import MensajeVictoriaComponente from "./MensajeVictoria";
import CartaComponente from "./Carta";
import "./index.css";
const TableroComponente = ({
	turno,
	handleDificultad,
	completo,
	reiniciarJuego,
	cartas,
	handleClick,
}) => {
	return (
		<div>
			<h1>Juego de Memoria</h1>
			<MarcadorComponente turno={turno} />
			<NivelComponente handleDificultad={handleDificultad} />
			<MensajeVictoriaComponente
				turno={turno}
				completo={completo}
				reiniciarJuego={reiniciarJuego}
			/>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
				}}
			>
				{cartas &&
					cartas.map((carta) => {
						return (
							<CartaComponente
								key={carta.id}
								carta={carta}
								handleClick={handleClick}
							/>
						);
					})}
			</div>
		</div>
	);
};
export default TableroComponente;
