import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { user } from '@/store'

const rootReducer = combineReducers({ user })

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
})

export default store
