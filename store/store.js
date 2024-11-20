import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import usuarioReducer from './slices/usuarioSlice'
import personasReducer from './slices/personasSlice'
import { api } from '../Api/api'

const localStoreMiddleware = ({getState}) => next => action => {
  const result = next(action)
  localStorage.setItem('state',JSON.stringify(getState()))
  return result
}

const informacionPersistida = localStorage.getItem('state')
const estadoPersistido = informacionPersistida ? JSON.parse(informacionPersistida) : {}

export default configureStore({
  reducer: {
    usuarioReducer,
    personasReducer,
    [api.reducerPath]: api.reducer
  },
  preloadedState: estadoPersistido,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStoreMiddleware).concat(thunk).concat(api.middleware),

})