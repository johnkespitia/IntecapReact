import { createSlice } from "@reduxjs/toolkit";

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {
        usuario: {}
    },
    reducers: {
        login: (state, action) => {
            const email = action.payload.email
            state.usuario =  { email }/// { name, email, pass, state, bio}
        },
        logout: state => {
            state.usuario = {}
        }
    },
})

export { usuarioSlice }
export const { login, logout } = usuarioSlice.actions
export default usuarioSlice.reducer