import { createSlice } from '@reduxjs/toolkit';

interface AuthSlice {
    user: { name: string } | null;
    token: null | String;
    isAuth: Boolean,
}

const initialState: AuthSlice = { user: null, token: null, isAuth: false }

export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout_clear: () => initialState,
        login: (state, action) => {
            state.isAuth = true
            state.token = "token is given"
            state.user = {
                name: "Admin"
            }
            localStorage.setItem('isAuth', JSON.stringify(true))
            localStorage.setItem('token', "token is given")
            localStorage.setItem('user', JSON.stringify({ name: "Admin" }))
        }
    },
});
export default slice.reducer;
export const { logout_clear, login } = slice.actions