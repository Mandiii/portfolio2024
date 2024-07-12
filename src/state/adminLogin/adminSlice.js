import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: { token: ""},
  reducers: {
    adminLogin(state, action) {
      state.token = action.payload
    },
    adminLogout(state) {
      localStorage.removeItem("token");
      state = {token: "" };
    }
  }
})

export const {adminLogin, adminLogout} = adminSlice.actions
export default adminSlice.reducer
