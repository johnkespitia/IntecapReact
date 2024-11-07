import React from 'react'
import './themes/bootstrap.min.css'
import { StoreProviderComponent } from './store'
import UsuarioComponent from './Componentes/Usuario'
import Layout from './Componentes/Layout'
function App(){
    return <StoreProviderComponent>
		  <Layout>
            <UsuarioComponent />
          </Layout>
    </StoreProviderComponent>
}
export default App