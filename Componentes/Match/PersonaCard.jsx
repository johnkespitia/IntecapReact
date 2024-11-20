import React from 'react'
import { Card, Button } from 'react-bootstrap'
const PersonaCard = ({persona, match, dismatch, ultimoMatch}) => {
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={persona.picture.large} />
    <Card.Body>
      <Card.Title>{persona.name.first} {persona.name.last}</Card.Title>
      <Card.Text>
        email: {persona.email}
      </Card.Text>
    </Card.Body>
    <Card.Footer className='d-flex justify-content-between'>
        <Button variant="success" size="lg" onClick={match}><i class="bi bi-heart-fill"></i></Button>
        <Button variant="info" size="lg" onClick={ultimoMatch}><i class="bi bi-arrow-counterclockwise"></i></Button>
        <Button variant="danger" size="lg" onClick={dismatch}><i className="bi bi-x-circle-fill"></i></Button>
    </Card.Footer>
  </Card>
}
export default PersonaCard