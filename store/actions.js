import * as actionTypes from './actionTypes';

export const signIn = (payload) => ({type: actionTypes.SIGN_IN, payload});
export const loadNews = (payload) => ({type: actionTypes.LOAD_NEWS, payload});
export const addName = (payload) => ({type: actionTypes.ADD_NAME, payload});