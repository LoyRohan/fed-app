import { createSlice } from "@reduxjs/toolkit";

interface UserData {
    userId: number;
    userName: string;
}

interface UserInfo {
    userInfo: UserData;
    loginStatus: boolean;
}

const initialValue: UserInfo = {
    userInfo: {
        userId: null,
        userName: "",
    },
    loginStatus: false
}

const userSlice = createSlice({
    name: "userDetails",
    initialState: initialValue,
    reducers: {
        updateLoginStatus: (state) => {
            state.loginStatus = !state.loginStatus
        },
        updateUserDetails: (state, action) => {
            state.userInfo.userId = action.payload.userId;
            state.userInfo.userName = action.payload.userName;
        }
    }
})

export const { updateLoginStatus, updateUserDetails } = userSlice.actions;


export default userSlice.reducer;