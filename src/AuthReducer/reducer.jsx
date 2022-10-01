import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const initialState = {
    isAuth: false,
    token:"",
    isLoading:false,
    isError:false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case LOGIN_REQUEST:{
      return { ...state, isLoading:true }
  }

  case LOGIN_SUCCESS:{
    return { ...state, isLoading:false,  isAuth:true ,token: payload}
}

case LOGIN_FAILURE:{
    return { ...state, isLoading:false, isError:true }
}
case "LogOut" :{
  return { ...state, isLoading:false, isError:false, isAuth:false, token:null }

}

  default:
    return state
  }
}

