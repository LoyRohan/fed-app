import { createSlice } from "@reduxjs/toolkit";

interface DefaultConfig {
    // userInfo: UserData;
    loginStatus: boolean;
}

const initialValue: DefaultConfig = {
    loginStatus: false
}

const appSlice = createSlice({
    name: "userDetails",
    initialState: initialValue,
    reducers: {
        updateLoginStatus: (state) => {
            state.loginStatus = !state.loginStatus
        }
    }
})

export const { updateLoginStatus } = appSlice.actions;


export default appSlice.reducer;