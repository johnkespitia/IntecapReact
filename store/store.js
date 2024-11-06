import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './slices/UsuarioSlice'

export default configureStore({
  reducer: {
    usuarioReducer: usuarioReducer
  }
})