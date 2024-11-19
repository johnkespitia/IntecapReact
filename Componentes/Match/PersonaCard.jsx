import React from 'react'
import { Card, Button } from 'react-bootstrap'
const PersonaCard = ({persona, match, dismatch}) => {
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={persona.picture.large} />
    <Card.Body>
      <Card.Title>{persona.name.first} {persona.name.last}</Card.Title>
      <Card.Text>
        email: {persona.email}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Button variant="success" size="lg" onClick={match}><i class="bi bi-check-circle-fill"></i></Button>
        <Button variant="danger" size="lg" onClick={dismatch}><i class="bi bi-x-circle-fill"></i></Button>
    </Card.Footer>
  </Card>
}
export default PersonaCard