import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { usuarioLogin } from "../../store";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (values, { setSubmitting}) => {
      setSubmitting(true)
      dispatch(usuarioLogin(values))
      navigate("/")
      setSubmitting(false)
      
    }
    const initialValues = {
      email: "demo@correo.com"
    }
    const validationSchema = Yup.object().shape({
      email: Yup.string("Debes ingresar texto").email("El email no es valido").required("Es obligatorio ingresar email"),
      password: Yup.string("Debes ingresar texto").required("Es obligatorio ingresar password").min(6,"el password debe ser mayor a 6 caracteres"),
    })
    return <Formik 
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validate={function(values, props) {
      //   const errors = {};
      //   if(values.email.length < 20){
      //     errors.email = "email muy corto"
      //   }
      //   return errors
      // }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
      })=>{
        return <Form className="m-4" onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} defaultValue={values.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.<br/>
            {errors.email}
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  name="password" onChange={handleChange} />
          <br/>
            {errors.password}
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Ingresar
        </Button>
        {" "}<Link to={"/registro"}>No tienes cuenta? registrate</Link>
      </Form>
      }}
      
  </Formik>
}

export default Login