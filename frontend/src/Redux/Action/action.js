import axios from 'axios';
import {GET_PRODUCTS, ALL_CATEGORY, ADD_PRODUCTS, CREATE_PRODUCT} from './actionTypes.js';


export const allProduct = ()=> {
    return async (dispatch)=>{
  
      const products = await axios.get(`http://localhost:3001/product`);
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data,
      });
      // console.log(products);
    };
  }

  export function createProduct(payload) {
    return async function(dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/product", payload)
            return {
                type: CREATE_PRODUCT,
                payload: response
            }
        }
        catch(error) {
            console.log(error)
        }
    }
}

export const createCategory = (payload) =>{
  console.log(payload);
  
  return async function () {
    try{
      const res = await axios.post(`http://localhost:3001/category`, payload);
      console.log();
      return{
        type: ADD_PRODUCTS,
        payload: res,
      }
    }catch(err){
      console.log(err);
      console.log('no salio la creacion de la categoria en redux, action');
    }
  }
}

export const allCategory = ()=>{
  return async function(dispatch){
    try{
      const category = await axios.get(`http://localhost:3001/category`);
      dispatch({
        type: ALL_CATEGORY,
        payload: category.data,
      });
    }
    catch(err){
      console.log(err);
      console.log('no salio el get de categoria en redux, action');
    }
  }
}