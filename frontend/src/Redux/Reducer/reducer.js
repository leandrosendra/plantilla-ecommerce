import {GET_PRODUCTS, ALL_CATEGORY} from '../Action/actionTypes.js'

const initialState = {
    product: [],
    category:[]


};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        
        case GET_PRODUCTS: 
            return {
              ...state, 
              product: action.payload
            };
        case ALL_CATEGORY: 
            return {
              ...state, 
              category: action.payload
            };
        
        default:
            return state;
    }
}