export interface IUserState {
  loading: boolean,
    currentUser: any,
    newUserInfo: any,
    accessToken: string,
    requestId: string,
    phone: '',
    verifyOtpStatus: false,
    isResetPassword: false,
}
export interface IPayloadLogin {
  phone: string;
  password: string;
}

export interface IPayloadVerifyOTP {
  requestId: string;
  otp: string;
}

export interface IPayloadRegisterUser {
  otpRequestId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  identityNumber: number;
  password: string;
  address: {
    addressLine1: string;
    addressLine2?: string;
    ward: string;
    district: string;
    city: string;
  };
  role: "user";
}
export interface IPayloadRegisterCooperate {
  otpRequestId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  identityNumber: number;
  password: string;
  address: {
    addressLine1: string;
    addressLine2?: string;
    ward: string;
    district: string;
    city: string;
  };
  role: "cooperate";
  corporateProfile: {
    companyName: string;
    taxNumber: string;
    address: {
      addressLine1: string;
      addressLine2?: string;
      ward: string;
      district: string;
      city: string;
    };
    representativeFullName: string;
    representativeRole: string;
    email: string;
  };
}
