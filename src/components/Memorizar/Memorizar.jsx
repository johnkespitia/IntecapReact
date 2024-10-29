import React, { useEffect, useState } from "react";

export const Memorizar = () => {
	const [cartas, setCartas] = useState([
    {
      id: 1,
      value: '1 corazones',
      giro: false,
    },
    {
      id: 2,
      value: '1 corazones',
      giro: false,
    },
    {
      id: 3,
      value: '1 corazones',
      giro: false,
    },
    {
      id: 4,
      value: '1 corazones',
      giro: false,
    }
  ]);
	const [primeraCarta, setPrimeraCarta] = useState(null);
	const [segundaCarta, setSegundaCarta] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [turno, setTurno] = useState(0);

	const revolverCartas = () => {
    const cartasSin = [...cartas]
    return cartasSin
  };

	const handleClick = (carta) => {
    if(!primeraCarta){
      setPrimeraCarta(carta)
      return
    }
    segundaCarta(carta)
    const pareja = primeraCarta.value === segundaCarta.value
    if(pareja){
      let cartasCopia = cartas
      let primera = cartasCopia.find((cart) => carta.id === primeraCarta.id )
      let segunda = cartasCopia.find((cart) => carta.id === segundaCarta.id )
    }
  };

	useEffect(() => {
		const cartasRevueltas = revolverCartas();
		setCartas(cartasRevueltas);
	}, []);

	return (
		<>
			<div>
				<h1>Memorizar</h1>
				<div style={{ display: "grid" }}></div>
				{cartas.map((carta, i) => {
					return (
						<div
							key={carta.id}
							className={carta.giro ? "flip" : ""}
							onClick={() => handleClick(carta)}
						>
							<div className="frente">
                {carta.value}             
              </div>
              <div className="tapa">

              </div>
						</div>
					);
				})}
			</div>
		</>
	);
};
