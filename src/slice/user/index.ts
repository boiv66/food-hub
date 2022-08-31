import { createSlice } from "@reduxjs/toolkit";
import {
  getMe,
  getRequestOtpRegister,
  login, verifyOtp,
  registerCooperate,
  registerUser,
  getRequestOtp,
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
      //#region getRequestOtpRegister
      .addCase(getRequestOtpRegister.pending, (state: any) => {
        state.loading = true
      })
      .addCase(getRequestOtpRegister.fulfilled, (state: any, action: any) => {
        state.loading = false
        state.requestId = action.payload.requestId
      })
      .addCase(getRequestOtpRegister.rejected, (state: any, action: any) => {
        state.loading = false
        state.requestId = ''
      })
      //#endregion  

      //#region verifyOtp
      .addCase(verifyOtp.pending, (state: any) => {
        state.loading = true
      })
      .addCase(verifyOtp.fulfilled, (state: any, action: any) => {
        state.loading = false
        state.verifyOtpStatus = action.payload
      })
      .addCase(verifyOtp.rejected, (state: any, action: any) => {
        state.loading = false
        state.verifyOtpStatus = false
      })
      //#endregion 

      //#region getMe
      .addCase(getMe.pending, (state: IUserState) => {
        state.loading = true;
      })
      .addCase(getMe.fulfilled, (state: any, action: any) => {
        state.loading = false
        state.currentUser = action.payload;
      })
      .addCase(getMe.rejected, (state: any, action: any) => {
        state.loading = false
        state.currentUser = null
      })
      //#endregion 

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

     // Register personal
     .addCase(registerUser.pending, (state: IUserState) => {
      state.loading = true;
    })
    .addCase(registerUser.fulfilled, (state: IUserState, action: any) => {
      state.loading = false;
      state.newUserInfo = null;
      state.accessToken = "";
      state.requestId = "";
      state.phone = '';
      state.verifyOtpStatus = false;
    })
    .addCase(registerUser.rejected, (state: IUserState, action: any) => {
      state.loading = false;
    })
    // Register cooperate
    .addCase(registerCooperate.pending, (state: IUserState) => {
      state.loading = true;
    })
    .addCase(registerCooperate.fulfilled, (state: IUserState, action: any) => {
      state.loading = false;
      state.newUserInfo = null;
      state.accessToken = "";
      state.requestId = "";
      state.phone = '';
      state.verifyOtpStatus = false;
    })
    .addCase(registerCooperate.rejected, (state: IUserState, action: any) => {
      state.loading = false;
    })

    //#region getRequestOtp
    .addCase(getRequestOtp.pending, (state: any) => {
      state.loading = true
    })
    .addCase(getRequestOtp.fulfilled, (state: any, action: any) => {
      state.loading = false
      state.requestId = action.payload.requestId
    })
    .addCase(getRequestOtp.rejected, (state: any, action: any) => {
      state.loading = false
      state.requestId = ''
    });
    //#endregion  
  }
});

export const { reducer: userReducer } = userSlice;

export const { setAccessToken, setNewUserInfo, setVerifyOtp, setPhone, setIsResetPassword} = userSlice.actions;
