import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
  name: "theme",
  initialState: ""
  reducers: {
    updateTheme(state, action) {
      state.value = action.payload
    },
    
  }
})

export const {} = themeSlice.actions
export default themeSlice.reducer
