import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userApi from "services/api/users";
import { IPayloadLogin, IPayloadRegisterCooperate, IPayloadRegisterUser, IPayloadVerifyOTP } from "./types";
import { setNewUserInfo,setPhone } from 'slice/user';

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