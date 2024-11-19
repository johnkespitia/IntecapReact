import { createSlice } from "@reduxjs/toolkit";

const personasSlice = createSlice({
    name:"personas",
    initialState:{
        personas: [],
        aceptados:[],
        rechazados:[]
    },
    reducers: {
        addPersona: (state, { payload }) => {
            state.personas.push(payload)
        }, 
        addAceptado: (state, {payload}) => {
            const indexArray = state.aceptados.findIndex((p) => p.email === payload.email)
            if(indexArray < 0){
                state.aceptados.push(payload)
            }
        },
        addRechazado: (state, {payload}) => {
            state.rechazados.push(payload)
        },
        removeAceptado: (state, {payload}) => {
            //state.aceptados.push(payload)
        },
        removeRechazado: (state, {payload}) => {
            // state.rechazados.push(payload)
        }
    }
})

export { personasSlice }
export const { 
    addPersona, 
    addAceptado, 
    addRechazado, 
    removeAceptado, 
    removeRechazado 
} = personasSlice.actions
export default personasSlice.reducer