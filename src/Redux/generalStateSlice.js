import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  loading: true,
  isAuthenticated: false
};

const generalStateSlice = createSlice({
  name: "GeneralState",
  initialState,
  reducers: {
    loadingHandler: (state,{payload}) => {
      state.loading = payload;
    },
    setIsAuthenticated: (state,{payload})=>{
      state.isAuthenticated = payload;
    },
  },
  extraReducers: {},
});

export const {loadingHandler,setIsAuthenticated } = generalStateSlice.actions;

export default generalStateSlice.reducer;
