import * as actionTypes from './actionTypes';

const initialState = {
    isSignedIn: false,
    news: [],
    name: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return {
                ...state, 
                isSignedIn: action.payload
            }
        case actionTypes.LOAD_NEWS:
            return {
                ...state,
                news: action.payload
            }
        case actionTypes.ADD_NAME:{
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;