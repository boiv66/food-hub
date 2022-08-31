import { IPayloadLogin, IPayloadVerifyOTP } from "slice/user/types";
import axios from "../axios";

const CONTROLLER_NAME = "/auth"

export const getRequestOtpRegister = (phone:string) => {
    return axios.post(`${CONTROLLER_NAME}/otp/request`,{phone})
}

export const verifyOtp = (dataOPT:IPayloadVerifyOTP) => {
    return axios.post(`${CONTROLLER_NAME}/otp/verify`, dataOPT)
}

export const registerUser = (dataUserRegister: any) => {
    return axios.post(`${CONTROLLER_NAME}/register`, dataUserRegister)
}

export const registerCooperate = (dataUserRegister: any) => {
    return axios.post(`${CONTROLLER_NAME}/register`, dataUserRegister)
}

export const login = (dataLogin:IPayloadLogin) => {
    return axios.post(`${CONTROLLER_NAME}/login`, dataLogin)
}

export const getMe = () => {
    return axios.get(`/users/`)
}

export const getRequestOtp = (phone:string) => {
  return axios.post(`${CONTROLLER_NAME}/forgot-password`,{phone})
}
