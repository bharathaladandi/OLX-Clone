import Authreducer from "./reducer";
import thunk from 'redux-thunk'
import {applyMiddleware, legacy_createStore} from 'redux'

export const store = legacy_createStore(Authreducer, applyMiddleware(thunk))