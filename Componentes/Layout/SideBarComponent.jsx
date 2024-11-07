import React from "react";

const SideBarComponent = () => {
	return (
		<>
			<div>
				<a className="text-decoration-none text-light d-flex align-items-center mt-3">
					<h3 className="ms-3">Logo</h3>
				</a>
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
			<div className="mb-3">
				<a className="text-decoration-none text-light d-flex align-items-center">
					<i className="bi bi-box-arrow-in-left"></i>
					<h3 className="ms-3">Salir</h3>
				</a>
			</div>
		</>
	);
};

export default SideBarComponent;
