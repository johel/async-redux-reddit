import {SELECT_REDDIT} from '../actions'

export function selectedReddit (state = 'reactjs', action){
  if(action.type === SELECT_REDDIT){
    return action.reddit;
  }else{
    return state;
  }
}