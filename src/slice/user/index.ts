import { createSlice } from "@reduxjs/toolkit";
import {
  login
} from "./action";
import { IUserState } from "./types";

const initialState: IUserState = {
  loading: false,
  currentUser: {},
  newUserInfo: null,
  accessToken: "",
  requestId: "",
  phone: '',
  verifyOtpStatus: false,
  isResetPassword:false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state: IUserState, action) => {
      state.accessToken = action.payload.accessToken;
    },
    setNewUserInfo: (state: IUserState, action) => {
      state.newUserInfo = action.payload;
    },
    setVerifyOtp: (state, action) => {
      state.verifyOtpStatus = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setIsResetPassword: (state, action) => {
      state.isResetPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //#region login
      .addCase(login.pending, (state: any) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state: any, action: any) => {
        state.loading = false
        state.accessToken = action.payload
      })
      .addCase(login.rejected, (state: any, action: any) => {
        state.loading = false
        state.accessToken = null
      })
    //#endregion
  }
});

export const { reducer: userReducer } = userSlice;

export const { setAccessToken, setNewUserInfo, setVerifyOtp, setPhone, setIsResetPassword} = userSlice.actions;
