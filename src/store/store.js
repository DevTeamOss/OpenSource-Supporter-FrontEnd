import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { user, githubRepoList, repoInfo, profile, point } from '@/store'
import { REDUX_LOCAL_STORAGE } from '@/constants/config.js'

const rootReducer = combineReducers({
    user,
    githubRepoList,
    repoInfo,
    profile,
    point,
})

const persistConfig = { storage, key: REDUX_LOCAL_STORAGE, whitelist: ['user'] }
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
})

export const persistor = persistStore(store)

export default store
