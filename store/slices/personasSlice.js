import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react";

const personasSlice = createSlice({
    name:"personas",
    initialState:{
        personas: [],
        aceptados:[],
        rechazados:[],
        ultimoMatch: null,
        personaLoading: false,
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

        getUltimoMatch: (state) => {
            state.ultimoMatch = state.personas[state.personas.length - 1]
          },

        removeAceptado: (state, {payload}) => {
            //state.aceptados.push(payload)
        },
        removeRechazado: (state, {payload}) => {
            // state.rechazados.push(payload)
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(addPersonaAsync.pending, (state)=>{
            state.personaLoading = true
        });
        builder.addCase(addPersonaAsync.fulfilled, (state, action)=>{
            state.personas.push(action.payload)
            state.personaLoading = false
        });
    }
})

export const addPersonaAsync = createAsyncThunk(
    'personas/addPersona',
    async (genero) => {
        let url = `https://randomuser.me/api?gender=${genero}`
        const response = await fetch(url)
        const data =  await response.json()
       return data;
    }
)


export { personasSlice }
export const { 
    addPersona, 
    addAceptado, 
    addRechazado,
    getUltimoMatch, 
    removeAceptado, 
    removeRechazado
} = personasSlice.actions
export default personasSlice.reducer