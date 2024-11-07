import React from "react";
import SideBarComponent from "./SideBarComponent";
import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";

const Layout = ({ children }) => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col
						xs="12"
						md="3"
						lg="2 min-vh-100 bg-dark d-flex flex-column justify-content-between"
					>
						<SideBarComponent />
					</Col>
					<Col className="p-0">
						<NavbarComponent />
						{children}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Layout;
