import React from 'react'
import Menu from './Componentes/Menu'
import HeroComponent from './Componentes/Hero'
import ContactoFormulario from './Componentes/Contacto'
import MenuImg from './Componentes/Menu/create'
function App(){
    return <div>
        <Menu name="John Espitia" darkMode={false} className="red" style={{
            backgroundColor: "#CCC54D"
        }} />
        <HeroComponent />
        <MenuImg />
        <ContactoFormulario saludo={{
            saludo:"Bienvenido!",
            nombre:"John Espitia"}}  />
    </div>
}
export default App