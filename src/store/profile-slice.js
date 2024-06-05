import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    name: '',
    avatarUrl: '',
    remainingPoint: 0,
    totalPoint: 0,
}

export const profileSlice = createSlice({
    name: 'profile',
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

export default profileSlice.reducer
