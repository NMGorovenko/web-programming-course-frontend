import {rootReducer} from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import sessionStorage  from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    whitelist : ['basket']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store);