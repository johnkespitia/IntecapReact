import React from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { usuarioLogout } from "../../store"
const HomeComponent = () => {
  const dispatch = useDispatch()
  /*
  function (state) {
    return state.usuarioReducer.usuario
  }
  */
  const handleLogout = () => {
    localStorage.clear()
    dispatch(usuarioLogout())
  }
  const usuario = useSelector(state => state.usuarioReducer.usuario)
    return <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Hola</Card.Title>
      <Card.Text>
        Bienvenido {usuario.email}
      </Card.Text>
      <Button variant="primary" onClick={handleLogout}>Salir</Button>
    </Card.Body>
  </Card>
}

export default HomeComponent