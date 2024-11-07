import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import SideBarComponent from "./SideBarComponent";

const Layout = ({children}) => {
  return (
    <Container>
        <Row>
            <Col>
             <NavbarComponent />
            </Col>
        </Row>
        <Row>
            <Col xs="12" md="4" lg="3">
                <SideBarComponent />
            </Col>
            <Col>
                {children}
            </Col>
        </Row>
    </Container>
  )
}

export default Layout