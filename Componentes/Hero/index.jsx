import React, { useContext } from "react";
import JuegoContexto from "../../JuegoContexto";
const HeroComponent = () => {
	const { marcadores } = useContext(JuegoContexto);
	return (
		<div className="full-ancho">
			<h2>Marcadores</h2>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "10px",
				}}
			>
				<div>
					<h3 style={{ color: "red" }}>Fácil</h3>
					<ul>
						{marcadores
							.filter((m) => m.dificultad === 8)
							.map((m, idx) => (
								<div key={idx}>
									<div>
										<h3>{m.nickname.toUpperCase()}</h3>
										<p>
											Turnos : <b>{m.turnos}</b>
										</p>
										<p>Cartas : <b>{m.dificultad}</b></p>
									</div>
								</div>
							))}
					</ul>
				</div>
				<div>
					<h3 style={{ color: "green" }}>Medio</h3>
					<ul>
						{marcadores
							.filter((m) => m.dificultad === 16)
							.map((m, idx) => (
								<div>
									<h3>{m.nickname.toUpperCase()}</h3>
									<p>
										Turnos : <b>{m.turnos}</b>
									</p>
									<p>Cartas : <b>{m.dificultad}</b></p>
								</div>
							))}
					</ul>
				</div>
				<div>
					<h3 style={{ color: "blue" }}>Difícil</h3>
					<ul>
						{marcadores
							.filter((m) => m.dificultad === 32)
							.map((m, idx) => (
								<div>
									<h3>{m.nickname.toUpperCase()}</h3>
									<p>
										Turnos : <b>{m.turnos}</b>
									</p>
									<p>Cartas : <b>{m.dificultad}</b></p>
								</div>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default HeroComponent;
