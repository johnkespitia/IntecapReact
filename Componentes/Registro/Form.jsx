import React from "react";
import { Form, Button } from "react-bootstrap";

const FormularioRegistro = ({
    values,
    errors,
    handleChange,
    isSubmitting,
    handleSubmit
}) => {
    return <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese email" name="email"
                onChange={handleChange} defaultValue={values.email} />
             <Form.Text className="text-muted text-danger">
                {errors.email}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre" name="name"  onChange={handleChange} />
            <Form.Text className="text-muted text-danger">
                {errors.name}
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"  onChange={handleChange} />
            <Form.Text className="text-muted text-danger">
                {errors.password}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="dni">
            <Form.Label>Cédula</Form.Label>
            <Form.Control type="number" placeholder="Cédula" min="0" name="legal_identification"  onChange={handleChange} />
            <Form.Text className="text-muted text-danger">
                {errors.legal_identification}
            </Form.Text>
        </Form.Group>
        <Button type="submit" variant="success" disabled={isSubmitting}>Registrarse</Button>
    </Form>
}

export default FormularioRegistro