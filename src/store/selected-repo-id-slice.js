import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const selectedRepoIdSlice = createSlice({
    name: 'selected-repo-id',
    initialState,
    reducers: {
        set: (state, action) => {
            return action.payload
        },
    },
})

export default selectedRepoIdSlice.reducer
