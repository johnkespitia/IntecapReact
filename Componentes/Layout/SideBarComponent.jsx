import React, { useEffect, useState } from "react";
import { Button, Col, Nav, Offcanvas } from "react-bootstrap";

const SideBarComponent = () => {
	const [showMenu, setShowMenu] = useState(true);
	const handleMenu = () => setShowMenu(!showMenu)

	useEffect(()=>{

	},[showMenu])

	return (
	<React.Fragment>
		<Button eventKey="close" variant="dark" onClick={handleMenu} className=" text-left w-100 d-block d-md-none ">
			{showMenu?"Cerrar":"Abrir"} Menu
		</Button>
		<Nav defaultActiveKey="/home" className={`flex-column bg-dark ${showMenu?"":"d-none"} d-md-block min-vh-100`}>
					<Nav.Link className="d-flex justify-content-between">		
							<h3 className="ms-3">Logo</h3>
					</Nav.Link>
					<Nav.Link href="/home">
						<i className="bi bi-bookmark-heart-fill"></i>
						<span className="ms-1"> Match</span>
					</Nav.Link>
					<Nav.Link eventKey="link-1">
						<i className="bi bi-safe2-fill"></i>
						<span className="ms-1"> Encontrar</span>
					</Nav.Link>
					<Nav.Link eventKey="link-2">
						<i className="bi bi-postage-heart-fill"></i>
						<span className="ms-1"> Favoritos</span>
					</Nav.Link>
					<Nav.Link eventKey="logout">
						<i className="bi bi-box-arrow-in-left"></i>
						<span className=""> Salir</span>
					</Nav.Link>
					
			</Nav>
	</React.Fragment>
	
	);
};

export default SideBarComponent;
/*
{/*<>
		<Col
						xs="12"
						md="3"
						lg="2"
						className={`p-0 m-0 w-full flex-column justify-content-between p-3 ${showMenu ? "d-flex" : "d-none"}`}
						style={{}}
					>
						<div className={`min-vh-100 bg-dark`}>
				<div>
					<div className="d-flex justify-content-between">
						<a className="text-decoration-none text-light d-flex align-items-center ">
							<h3 className="ms-3">Logo</h3>
						</a>
					</div>
					<ul className="nav nav-pills flex-column">
						<li className="nav-item fs-5">
							<a
								className="nav-link text-light mr-3"
								aria-current="page"
								href="#"
							>
								<i className="bi bi-bookmark-heart-fill"></i>
								<span className="ms-1">Match</span>
							</a>
						</li>
						<li className="nav-item fs-5">
							<a
								className="nav-link text-light"
								aria-current="page"
								href="#"
							>
								<i className="bi bi-safe2-fill"></i>
								<span className="ms-1">Encontrar</span>
							</a>
						</li>
						<li className="nav-item fs-5">
							<a
								className="nav-link text-light"
								aria-current="page"
								href="#"
							>
								<i className="bi bi-postage-heart-fill"></i>
								<span className="ms-1">Favoritos</span>
							</a>
						</li>
					</ul>
				</div>
				<div>
					<a className="text-decoration-none text-light d-flex align-items-center">
						<i className="bi bi-box-arrow-in-left"></i>
						<h3 className="ms-3">Salir</h3>
					</a>
				</div>
			</div>

			<div className="d-flex d-md-none">
				<Button
					className="bg-dark rounded-circle"
					style={{ width: "40px", height: "40px" }}
					variant="dark"
					onClick={() => setShowMenu(!showMenu)}
				>
					<i className="bi bi-x-lg"></i>
				</Button>
			</div>

			{/* d-md-flex d-none 
					</Col>
		</>*
*/