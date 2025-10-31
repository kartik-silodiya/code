// Your updated store.js file

"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from './storage'; // Import the custom storage solution

// Import all your reducers
import clickActionReducer from "./stateSlice/clickActionSlice";
import morePagesReducer from './reducers/morePagesReducer';
import settingsReducer from './reducers/settingsReducer';
import languageReducer from './reducers/languageReducer';
import CheckPermissionsReducer from './reducers/CheckPermissionsReducer';
import CheckNewsDataReducer from './reducers/CheckNewsDataReducer';
import userReducer from './reducers/userReducer';
import createNewsReducer from './reducers/createNewsReducer';
import CheckThemeReducer from './reducers/CheckThemeReducer';
import CategoriesReducer from './reducers/CategoriesReducer';
import RssFeedReducer from "./reducers/RssFeedReducer";
import helperReducer from './reducers/helperReducer';

const persistConfig = {
    key: 'root',
    storage, // Use the custom storage
    // You can also whitelist specific reducers to persist
    // whitelist: ['settings', 'user']
};

const rootReducer = combineReducers({
    clickAction: clickActionReducer,
    morePages: morePagesReducer,
    settings: settingsReducer,
    languages: languageReducer,
    checkPermission: CheckPermissionsReducer,
    checkNewsData: CheckNewsDataReducer,
    user: userReducer,
    createNews: createNewsReducer,
    checkTheme: CheckThemeReducer,
    categoriesData: CategoriesReducer,
    rssfeed: RssFeedReducer,
    helper: helperReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
