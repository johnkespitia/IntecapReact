import React from "react";

export const DragEvent = () => {


    
	return (
		<>
			<div
				draggable={true}
				onDragStart={(e) => console.log("onDragStart")}
				onDragEnd={(e) => console.log("onDragEnd")}
			>
				<button>Fuente de arrastre</button>
			</div>

			<div
				onDragEnter={(e) => console.log("onDragEnter")}
				onDragLeave={(e) => console.log("onDragLeave")}
				onDragOver={(e) => {
					e.preventDefault();
					console.log("onDragOver");
				}}
				onDrop={(e) => console.log("onDrop")}
			>
				<button>Área de destino</button>
			</div>
		</>
	);
};
