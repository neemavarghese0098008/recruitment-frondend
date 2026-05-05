import axios from "axios";

export const commonAPI = async (httpMethod, url, reqBody,reqHeader) => {

    const reqconfig ={
      method: httpMethod,
      url,      //url:url
      data: reqBody,
      headers: reqHeader ? reqHeader : {"content-type": "application/json"}
    }
    return await axios(reqconfig).then((res) =>{
         return res
        })
        .catch((err) => {
                throw err
            })
    }
        

export default commonAPI