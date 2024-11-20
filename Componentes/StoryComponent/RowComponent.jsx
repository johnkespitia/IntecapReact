import React, { memo } from "react";

const RowComponent = memo(({ row, personas }) => {

	return (
		<>
			<tr>
				<td>{row.nombre}</td>
				<td>{row.estado}</td>
				<td>{row.email}</td>
			</tr>
			{/* <ul>
				{personas.map((persona) => (
					<li key={persona.email}>{persona.name}</li>
				))}
			</ul> */}
		</>
	);
});

export default RowComponent;