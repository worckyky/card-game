import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import {AuthReducer} from "./Reducers/Auth-reducer";
import {LoginReducer} from "./Reducers/Login-reducer";
import {ProfileReducer} from "./Reducers/Profile-reducer";


let rootReducer = combineReducers({
    auth: AuthReducer,
    login: LoginReducer,
    profile: ProfileReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store