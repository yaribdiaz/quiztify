    import { configureStore } from "@reduxjs/toolkit";
    import authReducer from "./auth/authSlice";
    import chooseReducer from "./choose/chooseSlice";
    import playingReducer from "./playing/playingSlice";
    import storage from 'redux-persist/lib/storage'
    import { persistReducer } from "redux-persist";
    import { combineReducers } from "@reduxjs/toolkit";
    import thunk from "redux-thunk";

    const persistConfig = {
        key: 'root',
        storage,
        whitelist: [
            'authStates',
            'chooseStates',
            'playingStates'
    ]
    }

    const rootReducer = combineReducers({
        authStates:authReducer,
        chooseStates:chooseReducer,
        playingStates:playingReducer

    })

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const store = configureStore({
        reducer:persistedReducer,
        middleware:[thunk]
    })