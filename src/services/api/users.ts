import { IPayloadLogin, IPayloadVerifyOTP } from "slice/user/types";
import axios from "../axios";

const CONTROLLER_NAME = "/authentication"

export const login = (dataLogin:IPayloadLogin) => {
    return axios.post(`${CONTROLLER_NAME}/sign-in`, dataLogin)
}

