import React from "react";

export const Form = () => {
	return (
		<>
			<form id="contact-form" class="contact-form">
				<h2>Contáctanos</h2>
				<div className="form-group">
					<label for="name">Nombre:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Ingrese su nombre"
					/>
				</div>
				<div className="form-group">
					<label for="email">Correo electrónico:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Ingrese su correo electrónico"
					/>
				</div>
				<div className="form-group">
					<label for="message">Mensaje:</label>
					<textarea
						id="message"
						name="message"
						placeholder="Ingrese su mensaje"
					></textarea>
				</div>
				<button type="submit">Enviar</button>
			</form>
		</>
	);
};
