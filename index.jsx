//console.log('Hello, I\'m Oskr');
import React from 'react'
import Menu from './Componentes/Menu'
import HeroComponent from './Componentes/Hero'
import BrandComponent from './Componentes/Brand'
import ContactoFormulario from './Componentes/Contacto'
import './index.css';

function MyApp(){
    return  <div>
                <Menu name="Oskr" darkMode={false} className="red"
                    style={{
                        backgroundColor: "#CCC54D"
                    }}/>            
                <div className='box'>
                    <div className='image-container'>                                        
                        <HeroComponent/>                    
                        <BrandComponent/>
                    </div>
                </div>
                <ContactoFormulario saludo={{
                    msj: "Bienvenido!!!"
                }} />
            </div>
}

export { MyApp };
