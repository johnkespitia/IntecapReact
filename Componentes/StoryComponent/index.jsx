import { Button } from "react-bootstrap";
import React, { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";

const StoryComponent = ({pageSize = 2}) => {
    const listadoMatch=[
    {
        "nombre": "Juan Pérez",
        "estado": "activo",
        "email": "juan.perez@example.com"
    },
    {
        "nombre": "Ana García",
        "estado": "inactivo",
        "email": "ana.garcia@example.com"
    },
    {
        "nombre": "Carlos López",
        "estado": "activo",
        "email": "carlos.lopez@example.com"
    },
    {
        "nombre": "María Rodríguez",
        "estado": "inactivo",
        "email": "maria.rodriguez@example.com"
    },
    {
        "nombre": "Luis Fernández",
        "estado": "activo",
        "email": "luis.fernandez@example.com"
    }
]
    const [listMatchState, setListMatchState] = useState([])
    const [clicks, setClicks] = useState(0)
    const [pagActual, setPagActual]=useState(1)
    const listMemo = useMemo(()=>{
        const inicio = (pagActual -1)*pageSize
        const final = inicio + pageSize
        const matchsPage = listadoMatch.slice(inicio, final)
        setListMatchState(matchsPage)
    },[pagActual])
   
    return <>
     <h2>Historial de Matchs {clicks}</h2>
     <Button onClick={()=>{ setPagActual(pagActual-1)}}>Anterior</Button>
     <Button onClick={()=>{ setPagActual(pagActual+1)}}>Siguiente</Button>
    <Table onClick={()=>{ setClicks(clicks+1) }}>
        <thead>
                    <td>nombre</td>
                    <td>estado</td>
                    <td>email</td>
        </thead>
        <tbody>
            {listMatchState.map((m, idx)=>{
                return <RowComponent key={idx} row={m} />
            })}

        </tbody>
    </Table>
    </>
}


const RowComponent = memo(({row})=> {
    return  <tr>
    <td>{row.nombre}</td>
    <td>{row.estado}</td>
    <td>{row.email}</td>
</tr>
})

export default StoryComponent