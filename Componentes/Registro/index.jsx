import React from "react";
import FormularioRegistro from "./Form";
import { Alert, Card } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from 'yup'
import useRegisterUser from "./useRegisterUser";
import { Link } from "react-router-dom";

const Registro = () => {
    const {loading, errors, sendData, success} = useRegisterUser()
    const validationSchema = Yup.object().shape({
        email: Yup.string("Debes ingresar texto").email("El email no es valido").required("Es obligatorio ingresar email"),
        password: Yup.string("Debes ingresar texto").required("Es obligatorio ingresar password").min(6,"el password debe ser mayor a 6 caracteres"),
        name: Yup.string("Debes ingresar texto").required("Es obligatorio ingresar nombre").min(6,"el nombre debe ser mayor a 6 caracteres"),
        legal_identification: Yup.number("Debes ingresar número ").required("Es obligatorio ingresar cédula").min(10,"la cedula debe ser mayor a 10"),
    })

    const customizedSubmit = (values, { setSubmitting}) => {
        setSubmitting(loading)
        sendData(values)
        //dispatch usuario
        setSubmitting(loading)
    }

    return <Card>
        <Card.Header>
            <Card.Title>Registrate!</Card.Title>
        </Card.Header>
        <Card.Body>
            <Formik
                onSubmit={customizedSubmit}
                initialValues={{}}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isSubmitting
                })=>{
                    return <FormularioRegistro 
                        values={values} 
                        errors={errors} 
                        handleChange={handleChange}
                        isSubmitting={isSubmitting}
                        handleSubmit={handleSubmit}
                    />
                }}
            </Formik>
        </Card.Body>
        <Card.Footer>
            {errors && <Alert variant={"danger"}>
                {errors}
            </Alert>}
            {success && <Alert variant={"success"}>Usuario Registrado, ingrese con sus nuevas credenciales <Link to='/login' >Iniciar Sesión</Link>
            </Alert>}
        </Card.Footer>
    </Card>
}

export default Registro