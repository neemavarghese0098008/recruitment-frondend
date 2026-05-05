//defining all the APIs
import { serverURL } from "./serverURL";
import commonAPI from "./commonAPI";

//register API - POST (reqbody)
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/api/register`, reqBody,"")
}


//login API - POST (reqbody)
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/api/login`, reqBody,"")
}

//google login API - POST (reqbody)
export const googleLoginAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/api/google-login`, reqBody,"")
}
//make payment
export const makepaymentAPI = async (reqBody, reqHeader) => {
    return await commonAPI(
        "POST",
        `${serverURL}/api/payment/create-checkout-session`,
        reqBody,
        reqHeader
    );
};