
import { SHOW_LOADING, GET_MSG } from './states';

let initValue = {
  msg:'',
  loading:false
}
export default (state = initValue,actions)=>{
  switch(actions.type){
    case SHOW_LOADING:
      return {
        ...state,
        loading:actions.loading
      }
    case GET_MSG:
      return {
        ...state,
        msg:actions.msg
      }
    default:
      return state;
  }
}