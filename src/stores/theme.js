import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: JSON.parse(localStorage.getItem("theme")) || "light"
}

const theme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
            if (action.payload) {
                localStorage.setItem("theme", JSON.stringify(action.payload))
            } else {
                localStorage.removeItem("theme")
            }
        }
    }
})

export const { setTheme } = theme.actions
export default theme.reducer