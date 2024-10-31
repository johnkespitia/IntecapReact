import React, { useEffect, useState, useContext } from "react";
import TableroComponente from "./Tablero";
import JuegoContexto from "../../JuegoContexto";

const mazo = [
	{ id: 1, value: "2 corazones", giro: false },
	{ id: 2, value: "2 corazones", giro: false },
	{ id: 3, value: "3 tréboles", giro: false },
	{ id: 4, value: "3 tréboles", giro: false },
	{ id: 5, value: "4 picas", giro: false },
	{ id: 6, value: "4 picas", giro: false },
	{ id: 7, value: "5 diamantes", giro: false },
	{ id: 8, value: "5 diamantes", giro: false },
	{ id: 9, value: "6 corazones", giro: false },
	{ id: 10, value: "6 corazones", giro: false },
	{ id: 11, value: "7 tréboles", giro: false },
	{ id: 12, value: "7 tréboles", giro: false },
	{ id: 13, value: "8 picas", giro: false },
	{ id: 14, value: "8 picas", giro: false },
	{ id: 15, value: "9 diamantes", giro: false },
	{ id: 16, value: "9 diamantes", giro: false },
	{ id: 17, value: "10 corazones", giro: false },
	{ id: 18, value: "10 corazones", giro: false },
	{ id: 19, value: "J tréboles", giro: false },
	{ id: 20, value: "J tréboles", giro: false },
	{ id: 21, value: "Q picas", giro: false },
	{ id: 22, value: "Q picas", giro: false },
	{ id: 23, value: "K diamantes", giro: false },
	{ id: 24, value: "K diamantes", giro: false },
	{ id: 25, value: "A corazones", giro: false },
	{ id: 26, value: "A corazones", giro: false },
	{ id: 27, value: "2 tréboles", giro: false },
	{ id: 28, value: "2 tréboles", giro: false },
	{ id: 29, value: "3 picas", giro: false },
	{ id: 30, value: "3 picas", giro: false },
	{ id: 31, value: "4 diamantes", giro: false },
	{ id: 32, value: "4 diamantes", giro: false },
];

const MemorizarJuego = (props) => {
	const { addMarcador } = useContext(JuegoContexto);
	const [cartas, setCartas] = useState(mazo);
	const [primeraCarta, setPrimeraCarta] = useState(null);
	const [segundaCarta, setSegundaCarta] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [turno, setTurno] = useState(0);
	const [completo, setCompleto] = useState(false);
	const [nuevoJuego, setNuevoJuego] = useState(false);
	const [dificultadJuego, setDificultadJuego] = useState(8);

	const revolverCartas = () => {
		let cartasSin = mazo.slice(0, dificultadJuego).map((carta) => ({
			...carta,
			giro: false,
		}));
		for (let i = cartasSin.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[cartasSin[i], cartasSin[j]] = [cartasSin[j], cartasSin[i]];
		}
		return cartasSin;
	};

	const resetCards = () => {
		setDisabled(false);
		setPrimeraCarta(null);
		setSegundaCarta(null);
	};

	const reiniciarJuego = () => {
		resetCards();
		const nuevoJuego = mazo;
		setCartas(nuevoJuego);
		setTurno(0);
		setCompleto(false);
		setNuevoJuego(true);
	};
	//component did mount
	useEffect(() => {
		const cartasRevueltas = revolverCartas();
		setCartas(cartasRevueltas);
	}, []);

	useEffect(() => {
		if (cartas && cartas.every((carta) => carta.giro == true)) {
			addMarcador({
				turnos: turno,
				dificultad: dificultadJuego,
				nickname: "anonimo",
			});
			setCompleto(true);
		}
	}, [turno]);

	useEffect(() => {
		if (nuevoJuego == true) {
			const cartasRevueltas = revolverCartas();
			setCartas(cartasRevueltas);
			setNuevoJuego(false);
		}
	}, [nuevoJuego]);

	useEffect(() => {
		const cartasRevueltas = revolverCartas();
		setCartas(cartasRevueltas);
        resetCards()
	}, [dificultadJuego]);

	useEffect(() => {
		if (segundaCarta != null) {
			const pareja = primeraCarta.value == segundaCarta.value;
			if (pareja == false || pareja != true || !pareja) {
				setTimeout(() => {
					setGiro(primeraCarta, false);
					setGiro(segundaCarta, false);
					resetCards();
				}, 1000);
			} else {
				resetCards();
			}
			setTurno(turno + 1);
		}
	}, [segundaCarta]);

	const setGiro = (carta, giro) => {
		let cartaGiro = cartas.findIndex((card) => card.id === carta.id);
		let tempCartas = cartas;
		tempCartas[cartaGiro].giro = giro;
		setCartas(tempCartas);
	};

	const handleClick = (carta) => {
		if (carta.giro || disabled) {
			return;
		}
		if (!primeraCarta) {
			setPrimeraCarta(carta);
			setGiro(carta, true);
			return;
		}
		setSegundaCarta(carta);
		setGiro(carta, true);
		setDisabled(true);
	};

	const handleDificultad = (evt) => {
		setDificultadJuego(+evt.target.value);
	};

	return (
		<TableroComponente
			turno={turno}
			cartas={cartas}
			handleClick={handleClick}
			handleDificultad={handleDificultad}
			completo={completo}
			reiniciarJuego={reiniciarJuego}
		/>
	);
};

export default MemorizarJuego;
