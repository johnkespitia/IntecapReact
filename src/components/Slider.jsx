import React from "react";

export const Slider = () => {


    
	return (
		<>
			<main>
				<ul className="slider" style={{listStyle: 'none'}}>
					<li
						className="item"
						style={{
							backgroundImage:
								"url(https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg)",
						}}
					>
						<div className="content">
							<h2 className="title">"Lossless Youths"</h2>
							<p className="description">
								{" "}
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Tempore fuga voluptatum, iure corporis inventore
								praesentium nisi. Id laboriosam ipsam enim.{" "}
							</p>
							<button>Read More</button>
						</div>
					</li>
				</ul>
			</main>
		</>
	);
};
