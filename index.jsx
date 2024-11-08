import React from 'react'
import './themes/bootstrap.min.css'
import { StoreProviderComponent } from './store'
import Layout from './Componentes/Layout'
import AppRouterProvider from './Rutas'

function App(){
    return <StoreProviderComponent>
		  <Layout>
        <AppRouterProvider />
      </Layout>
    </StoreProviderComponent>
}
export default App