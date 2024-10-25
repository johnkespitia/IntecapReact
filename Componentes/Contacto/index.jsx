import React, {useState} from 'react'

const ContactoFormulario = (props) => {
    const [formData, setFormData] = useState({})
    const [message, setMessage] = useState("")
    const handleInput = (evt) => {
        ///console.log(evt.target.name, evt.target.value)
        let formProcess = formData
        formProcess[evt.target.name] = evt.target.value
        setFormData(formProcess)
        
        //if(evt.target.name == "nombre"){
        //    formProcess.name=evt.target.value
        //}

        //let formProcessDest = {
        //    ...formData,
        //    [evt.target.name]: evt.target.value
        //}
        //setFormData(formProcessDest)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setMessage(<p>Nombre: {formData.nombre}
            <br/>
            Email: {formData.email}</p>)
        //`sdfsdfsdf ${formData.nombre}`
    }

    return <form action='' onSubmit={handleSubmit} method='post'>
        <h3>{props.saludo.saludo} <span>{props.saludo.nombre}</span></h3>
        <h3>{`${props.saludo.saludo} ${props.saludo.nombre}`} </h3>
        <label>Nombre: </label>
        <input onInput={handleInput} name='nombre' type='text' placeholder='Como te llamas?' />
        <br />
        <label>Email: </label>
        <input onInput={handleInput} name='email' type='email' placeholder='A donde te escribo?' />
        <br />
        <label>Teléfono: </label>
        <input onInput={handleInput} name='tel' type='tel' placeholder='A donde te llamo?' />
        <br />
        <label>Mensaje: </label>
        <textarea onInput={handleInput} name='mensaje' placeholder='De que quieres conversar?'></textarea>
        <br />
        <button type='submit'>Enviar</button>
        <div id="mensaje">{message}</div>
    </form>
}

export default ContactoFormulario