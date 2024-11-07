import React from "react";
import SideBarComponent from "./SideBarComponent";
import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import { Button } from "react-bootstrap";

const Layout = ({ children }) => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col
						xs="10"
						md="3"
						lg="2"
						className="p-0 m-0 "
						style={{}}
					>
						<SideBarComponent />
					</Col>
					<Col className="p-0 m-0" xs="12" md="9" lg="10">
						<NavbarComponent />
						{children}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Layout;
