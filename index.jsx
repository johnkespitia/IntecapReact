import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StoreProviderComponent } from './store'
import UsuarioComponent from './Componentes/Usuario'
function App(){
    return <StoreProviderComponent>
		<UsuarioComponent />
    </StoreProviderComponent>
}
export default App