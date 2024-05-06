import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: 'guest',
    name: 'guest-user',
    avatar_url: '',
    supported_point: 0,
    gained_point: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set: (state, action) => {
            return { ...action.payload }
        },
        clear: () => {
            return { ...initialState }
        },
    },
})

export default userSlice.reducer
