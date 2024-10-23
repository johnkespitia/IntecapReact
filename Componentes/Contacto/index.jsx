import React from 'react'
const ContactoFormulario = () => {
    return <form action='' method='post'>
        <label>Nombre: </label>
        <input name='nombre' type='text' placeholder='Como te llamas?' />
        <br />
        <label>Email: </label>
        <input name='email' type='email' placeholder='A donde te escribo?' />
        <br />
        <label>Teléfono: </label>
        <input name='tel' type='tel' placeholder='A donde te llamo?' />
        <br />
        <label>Mensaje: </label>
        <textarea name='mensaje' placeholder='De que quieres conversar?'></textarea>
        <br />
        <button>Enviar</button>
    </form>
}

export default ContactoFormulario