import { createSlice } from "@reduxjs/toolkit"

interface ConterState {
    value: number
}

const initialState: ConterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -= 1
        },
    }
})

// export const getApiData = createAsyncThunk({

// })

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer