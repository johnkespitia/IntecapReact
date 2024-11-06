import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { usuarioLogin } from "../../../store";

const Login = () => {
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()
    const handleInput = (evt) => {
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
      })
    }
    const handleSubmit = (evt) => {
      evt.preventDefault()
      dispatch(usuarioLogin(formData))
    }
    return <Form className="m-5" onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onInput={handleInput} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  name="password" onInput={handleInput} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Ingresar
    </Button>
  </Form>
}

export default Login