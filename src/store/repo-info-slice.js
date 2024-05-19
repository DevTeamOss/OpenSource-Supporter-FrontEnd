import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const repoInfoSlice = createSlice({
    name: 'repo-info',
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

export default repoInfoSlice.reducer
