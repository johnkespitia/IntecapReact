import React from "react";

export const Form = () => {
	return (
		<>
			<div className="container-form">
				<div>
					<h3>Dejanos tus datos</h3>
					<p>Ingresa tus datos y nos pondremos en contacto contigo.</p>
					<p>¡Gracias por tu tiempo!</p>
					<img
						src="https://react-landing-page-template-93ne.vercel.app/img/portfolio/06-large.jpg"
						alt="titulo"
                        width="500px"
					/>
				</div>
				<form id="contact-form" className="contact-form">
					<h2>Contáctanos</h2>
					<div className="form-group">
						<label htmlFor="name">Nombre:</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Ingrese su nombre"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Correo electrónico:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Ingrese su correo electrónico"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Mensaje:</label>
						<textarea
							id="message"
							name="message"
							placeholder="Ingrese su mensaje"
						></textarea>
					</div>
					<button type="submit">Enviar</button>
				</form>
			</div>
		</>
	);
};
