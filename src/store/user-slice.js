import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: 'guest',
    name: 'guest-user',
    email: '',
    avatarUrl: '',
    accessToken: '',
    remainingPoint: 0,
    totalPoint: 0,
    adLink: '',
    cardLink: '',
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
