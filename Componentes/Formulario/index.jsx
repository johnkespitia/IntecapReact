import React, {useState, useContext, useRef} from "react";
import Form from 'react-bootstrap/Form';
import { JugadorContexto } from "../../JugadorContexto";
import { Button } from "react-bootstrap";

function FormularioComponente() {
    const { setJugador } = useContext(JugadorContexto)
    const [formData, setFormData] = useState({})
    const form = useRef(null)
    const handleInput = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setJugador(formData)
        form.current.reset();
        // console.log(form.current.children[0].children[1].name)
    }

    return <Form ref={form} className="m-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="GrupoNombre">
            <Form.Label htmlFor="nombre">Nombre</Form.Label>
            <Form.Control
                type="text"
                id="nombre"
                name="nombre"
                onInput={handleInput}
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                El nombre debe ser mayor a 3 caracteres y no lleva espacios.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="GrupoEmail">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
                type="email"
                id="email"
                name="email"
                onInput={handleInput}
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                Corre electronico.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="GrupoCumple">
            <Form.Label htmlFor="cumple">Cumpleaños</Form.Label>
            <Form.Control
                type="date"
                id="cumple"
                name="cumple"
                onInput={handleInput}
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
               Cuando cumples años?
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="GrupoBio">
            <Form.Label htmlFor="bio">Bio</Form.Label>
            <Form.Control
                as="textarea" 
                id="bio"
                name="bio"
                onInput={handleInput}
                aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
                Biografia o perfil description.
            </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">Registrar</Button>
    </Form>
}

export default FormularioComponente