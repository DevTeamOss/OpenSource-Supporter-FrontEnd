import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { user, githubRepoList, repoInfo } from '@/store'

const rootReducer = combineReducers({ user, githubRepoList, repoInfo })

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
})

export default store
