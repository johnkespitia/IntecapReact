import React from 'react'
class Menu extends React.Component{
    render(){
        return <nav id='menu-principal' className='full-ancho fondo-claro'>
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Acerca de mi</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </nav>
    }
}

export default Menu