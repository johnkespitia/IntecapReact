import { createSlice } from "@reduxjs/toolkit";

const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: {
        usuario: {}
    },
    reducers: {
        login: (state, action) => {
            state.usuario = action.payload /// { name, email, pass, state, bio}
        },
        logout: state => {
            state.usuario = {}
        }
    }
})

export { usuarioSlice }
export const { login, logout } = usuarioSlice.actions
export default usuarioSlice.reducer