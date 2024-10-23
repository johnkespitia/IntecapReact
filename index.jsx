import React from 'react'
import Menu from './Componentes/Menu'
import HeroComponent from './Componentes/Hero'
import ContactoFormulario from './Componentes/Contacto'
import MenuImg from './Componentes/Menu/create'
function App(){
    return <div>
        <Menu />
        <HeroComponent />
        <MenuImg />
        <ContactoFormulario />
    </div>
}
export default App