import { GET_PRODUCTS, ALL_CATEGORY, CREATE_PRODUCT, REGISTER_USER, LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from '../Action/actionTypes.js'

const initialState = {
  product: [],
  category: [],
  user: null,
  token: null,
  loading: false,
  error: null,

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
    case CREATE_PRODUCT:
      return {
        ...state,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGIN_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        token: action.payload.tokenSession,
        loading: false,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}