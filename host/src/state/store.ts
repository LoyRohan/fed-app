import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice"
import UserDetails from "./login/userSlice"
import AppSlice from "./appSlice";

export const store = configureStore({
    reducer: combineReducers({
        counter: CounterReducer,
        userInfo: UserDetails,
        appConfig: AppSlice
    })
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;