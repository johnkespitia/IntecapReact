import { configureStore } from '@reduxjs/toolkit'
import usuarioReducer from './slices/usuarioSlice'
import personasReducer from './slices/personasSlice'

export default configureStore({
  reducer: {
    usuarioReducer: usuarioReducer,
    personasReducer: personasReducer,
  }
})