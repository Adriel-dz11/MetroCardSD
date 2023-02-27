import { createSlice } from "@reduxjs/toolkit";
import resources from "../App/resources.json";

const initialState = {
  isOpen: false,
  resourcesApp: resources,
  loading: true,
  isBlocked: false,
  isAuthenticated: false, //Only for test true
  popUpBody:'',
  codeExpiredTime: false,
  step:0
};

const generalStateSlice = createSlice({
  name: "GeneralState",
  initialState,
  reducers: {
    popUpToggle: (state,{payload}) => {
      state.isOpen = !state.isOpen;
      state.popUpBody = payload
    },
    loadingHandler: (state,{payload}) => {
      state.loading = payload;
    },
    codeExpiredTimeToggle: (state,{payload}) => {
      state.codeExpiredTime = payload;
    },
    setIsAuthenticated: (state,{payload})=>{
      state.isAuthenticated = payload;
    },
    setIsBlocked: (state,{payload})=>{
      state.isBlocked = payload;
    },
    setStep: (state,{payload})=>{
      state.step = payload;
    }
  },
  extraReducers: {},
});

export const { popUpToggle,loadingHandler,codeExpiredTimeToggle,setReloan,setIsAuthenticated,setIsBlocked,setStep } = generalStateSlice.actions;

export default generalStateSlice.reducer;
