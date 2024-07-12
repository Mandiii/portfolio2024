import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
  name: "theme",
  initialState: {theme: "elegant"},
  reducers: {
    updateTheme(state, action) {
        console.log(action.payload)
      state.theme = action.payload
    },
    
  }
})

export const {updateTheme} = themeSlice.actions
export default themeSlice.reducer

