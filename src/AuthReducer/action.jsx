import axios from "axios"
import * as types from "./actionType"

export const loginRequest =()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}

export const loginSuccess = (payload)=>{
    return{
        type:types.LOGIN_SUCCESS,
        payload
    }
}

export const loginFailure =()=>{
    return{
        type:types.LOGIN_FAILURE
    }
}
export const login = (payload)=>(dispatch)=>{
    dispatch(loginRequest())
    axios.post("https://reqres.in/api/login",payload).then((res)=>{
        dispatch(loginSuccess(res.data.token))
    }).catch((err)=>{
        dispatch(loginFailure())
    })
}

export const signup = (payload)=>(dispatch)=>{
    dispatch(loginRequest())
    axios.post("https://reqres.in/api/register",payload).then((res)=>{
        dispatch(loginSuccess(res.data.token))
    }).catch((err)=>{
        dispatch(loginFailure())
    })
}