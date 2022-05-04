import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import sessionStorage  from 'redux-persist/lib/storage/session';

/** persist settings. */
const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist : ['basket']
};

/** Persisted reducer. */
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

/** persistor for redux. Need for save state in session storage. */
export const persistor = persistStore(store);
