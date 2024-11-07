import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const SideBarComponent = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className={`min-vh-100 bg-dark flex-column justify-content-between p-3 ${showMenu ? "d-none" : "d-flex"}`}>
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

			{/* d-md-flex d-none */}
		</>
	);
};

export default SideBarComponent;
