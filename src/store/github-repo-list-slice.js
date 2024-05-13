import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const githubRepoListSlice = createSlice({
    name: 'github-repo-list',
    initialState,
    reducers: {
        set: (state, action) => {
            return [...action.payload]
        },
    },
})

export default githubRepoListSlice.reducer
