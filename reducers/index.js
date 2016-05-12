import { combineReducers } from 'redux'
import {
	SELECT_REDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS,
	REFRESH_REDDIT
} from '../actions'


function selectedReddit (state = 'reactjs', action){
  if(action.type === SELECT_REDDIT){
    return action.reddit;
  }else{
    return state;
  }
}

const postsInitialState = {
	isLoading:false,
	didRefresh:false,
  items:[]
};
function posts(state = postsInitialState , action){
	if(action.type === REQUEST_POSTS){
		return Object.assign({}, state, {isLoading:true} );
	} else if(action.type === RECEIVE_POSTS){
		return Object.assign({}, state, {
			items:action.posts,
			isLoading:false,
			didRefresh:false,
			lastUpdated: action.receivedAt
		});
	}else if(action.type === REFRESH_REDDIT){
		return Object.assign({}, state, {didRefresh:true});
	}
	else{
		return state;
	}
}

function postsByReddit(state = {}, action){
	
	if(action.type === REQUEST_POSTS || action.type === RECEIVE_POSTS || action.type === REFRESH_REDDIT){
		return Object.assign({}, state,{
				[action.reddit]: posts(state[action.reddit], action)
	    })
	}
	else{
      return state;
  }

}

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit
})

export default rootReducer