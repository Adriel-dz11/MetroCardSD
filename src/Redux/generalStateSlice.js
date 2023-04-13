import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  loading: true,
  isAuthenticated: false,
  popUpBody:'',
  authToken: ''
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
    setAuthToken: (state,{payload})=>{
      state.authToken = payload;
    },
    popUpToggle: (state,{payload}) => {
      state.isOpen = !state.isOpen;
      state.popUpBody = payload
    },
  },
  extraReducers: {},
});

export const {popUpToggle,setAuthToken,loadingHandler,setIsAuthenticated } = generalStateSlice.actions;

export default generalStateSlice.reducer;
