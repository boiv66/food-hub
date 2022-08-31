import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from "services/api/users";
import { IPayloadLogin, IPayloadRegisterCooperate, IPayloadRegisterUser, IPayloadVerifyOTP } from "./types";
import { setNewUserInfo,setPhone } from 'slice/user';



export const backupUserInfo = createAsyncThunk("auth/setNewUserInfo",
    async (payload: any, thunkApi) => {
        try {
            thunkApi.dispatch(setNewUserInfo(payload))
            thunkApi.dispatch(setPhone(payload.phone))
            await thunkApi.dispatch(getRequestOtpRegister({ phone: payload.phone }))
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    });

export const getRequestOtpRegister = createAsyncThunk("auth/getRequestOtpRegister",
    async (param: any, thunkApi) => {
        try {
            const response = await userApi.getRequestOtpRegister(param.phone);
            return response.data;
        } catch (error: any) {
            alert(error.response.data.message)
            return thunkApi.rejectWithValue(error.response.data);
        }
    });

export const verifyOtp = createAsyncThunk("auth/verifyOtp",
    async (dataOPT: IPayloadVerifyOTP, thunkApi) => {
        try {
            const response = await userApi.verifyOtp(dataOPT);
            return response.status === 202 || response.status === 200

        } catch (error: any) {
            alert(error.response.data.message)
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (dataLogin: IPayloadLogin, thunkApi) => {
        try {
            const data = await userApi.login(dataLogin);
            if (data.data.accessToken != null) {
                localStorage.setItem("accessToken", data.data.accessToken);
            }
        } catch (error: any) {
            alert(error.response.data.message)
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (payload: IPayloadRegisterUser) => {
        try {
            const response = await userApi.registerUser(payload);
            return response.data;
        } catch (error: any) {
            console.error(error.message)
        }
    }
);

export const registerCooperate = createAsyncThunk(
    "auth/registerCooperate",
    async (payload: IPayloadRegisterCooperate) => {
        try {
            const response = await userApi.registerCooperate(payload);
            return response.data;
        } catch (error: any) {
            console.error(error.message)
        }
    }
);

export const getMe = createAsyncThunk(
    "auth/getMe",
    async (params: any, thunkApi) => {
        try {
            const response = await userApi.getMe();
            const currentUser = response.data?.find((item: any) => item.phone === params.phone)
            return currentUser;
        } catch (error: any) {
            alert(error.response.data.message)
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const getRequestOtp = createAsyncThunk("auth/getRequestOtp",
    async (param: any, thunkApi) => {
        try {
            const response = await userApi.getRequestOtp(param.phone);
            return response.data;
        } catch (error: any) {
            alert(error.response.data.message)
            return thunkApi.rejectWithValue(error.response.data);
        }
    });