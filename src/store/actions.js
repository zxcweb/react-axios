import { SHOW_LOADING, GET_MSG } from './states';
import axios from '../axios/config.js';

export function showLoading(payload){
  return {
    type:SHOW_LOADING,
    loading:payload
  }
}

export function getMsg(){
  return (dispatch)=>{
    axios.get("/msg",{})
    .then((data)=>{
      console.log(data)
      dispatch({
        type:GET_MSG,
        msg:data.data.msg
      }) 
    })
  } 
}
