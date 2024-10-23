//console.log('Hello, I\'m Oskr');
import React from 'react'
import Menu from './Componentes/Menu'
import HeroComponent from './Componentes/Hero'
import BrandComponent from './Componentes/Brand'
import ContactoFormulario from './Componentes/Contacto'
import './index.css';

function MyApp(){
    return  <div>
                <Menu/>            
                <div className='box'>
                    <div className='image-container'>                                        
                        <HeroComponent/>                    
                        <BrandComponent/>
                    </div>
                </div>
                <ContactoFormulario />
            </div>
}

export { MyApp };
