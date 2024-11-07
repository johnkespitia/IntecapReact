import React from "react";
import {
	Navbar,
	Button,
	NavDropdown,
	Container,
	Form,
	Nav,
} from "react-bootstrap";

const NavbarComponent = () => {
	return (
		<Navbar expand="lg" className="bg-dark" variant="dark ">
			<Container>
				<div className="d-flex">
					<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
					<Nav
						className="me-auto my-2 my-lg-0 "
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action2">Link</Nav.Link>
						<NavDropdown title="Link" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Something else here
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#" disabled>
							Link
						</Nav.Link>
					</Nav>
				</div>
				<div className="d-flex">
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2 mr-3"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</div>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
