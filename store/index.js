import Store from './store'
import StoreProviderComponent from './StoreProviderComponent'
import { login as usuarioLogin, logout as usuarioLogout } from './slices/usuarioSlice'
import {
    addAceptado,
    addPersona,
    addRechazado,
    getUltimoMatch,
    removeAceptado,
    removeRechazado,
    addPersonaAsync
} from './slices/personasSlice'
export {
    Store,
    StoreProviderComponent,
    usuarioLogin,
    usuarioLogout,
    addAceptado,
    addPersona,
    addRechazado,
    getUltimoMatch,
    removeAceptado,
    removeRechazado,
    addPersonaAsync
}