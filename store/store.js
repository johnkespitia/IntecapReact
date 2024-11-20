import { configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import usuarioReducer from './slices/usuarioSlice'
import personasReducer from './slices/personasSlice'

const localStoreMiddleware = ({getState}) => next => action => {
  const result = next(action)
  localStorage.setItem('state',JSON.stringify(getState()))
  return result
}

const informacionPersistida = localStorage.getItem('state')
const estadoPersistido = JSON.parse(informacionPersistida)

export default configureStore({
  reducer: {
    usuarioReducer: usuarioReducer,
    personasReducer: personasReducer,
  },
  preloadedState: estadoPersistido,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStoreMiddleware).concat(thunk),

})