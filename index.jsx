import React from 'react'
import './themes/bootstrap.min.css'
import { StoreProviderComponent } from './store'
import Layout from './Componentes/Layout'
import AppRouterProvider from './Rutas'
import RutaDeclarativaProvider from './RutaDeclarativa'

function App(){
    return <StoreProviderComponent>
		  
        {/*<Layout><AppRouterProvider /></Layout>*/}
        <RutaDeclarativaProvider />
    </StoreProviderComponent>
}
export default App