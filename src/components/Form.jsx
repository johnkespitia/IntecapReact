import React, { useEffect, useState } from "react";

export const Form = ({ saludo }) => {
	const [formData, setFormData] = useState({});
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	console.log(formData);

	const onSubmit = (e) => {
		e.preventDefault();
		setMessage(` 
			Nombre: ${formData.name}
			Correo: ${formData.email}`);
	};

	useEffect(() => {
		setFormData({})
	}, []);

	return (
		<>
			<div className="container-form">
				<div>
					<h1>{saludo}</h1>
					<h3>Dejanos tus datos</h3>
					<p>Ingresa tus datos y nos pondremos en contacto contigo.</p>
					<p>¡Gracias por tu tiempo!</p>
					<img
						src="https://react-landing-page-template-93ne.vercel.app/img/portfolio/06-large.jpg"
						alt="titulo"
						width="500px"
					/>
				</div>
				<form
					id="contact-form"
					className="contact-form"
					onSubmit={onSubmit}
				>
					<div className="form-group">
						<label htmlFor="name">Nombre:</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Ingrese su nombre"
							onInput={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Correo electrónico:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Ingrese su correo electrónico"
							onInput={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="whatsapp">WhatsApp:</label>
						<input
							type="text"
							id="wahtsapp"
							name="whatsapp"
							placeholder="Ingrese su numero de WhatsApp"
							onInput={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Mensaje:</label>
						<textarea
							id="message"
							name="message"
							placeholder="Ingrese su mensaje"
							onInput={handleChange}
						></textarea>
					</div>
					<button>Enviar</button>
					<div id="mensaje">{message}</div>
				</form>
			</div>
		</>
	);
};
