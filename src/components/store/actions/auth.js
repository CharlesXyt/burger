import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
};


export const authSuccess = (token,userId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
};

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
};

export const logout = () => {
    return {
        type:actionTypes.AUTH_LOGOUT,
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() =>{
            dispatch(logout())
        },expirationTime*1000)
    }
}


export const auth = (email,password,isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZT-5sz9h1hVxVuf_dVcVSsrP2mzNqaDk"
        if(isSignup){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZT-5sz9h1hVxVuf_dVcVSsrP2mzNqaDk"
        }
        axios.post(url,authData)
        .then(res =>{
            dispatch(authSuccess(res.data.idToken,res.data.localId))
            dispatch(checkAuthTimeout(res.data.expireIn))
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error))
        })
    }
}