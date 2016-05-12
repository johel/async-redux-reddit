import fetch from 'isomorphic-fetch'
export const SELECT_REDDIT = 'SELECT_REDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REFRESH_REDDIT = 'REFRESH_REDDIT';


export function selectReddit(reddit){
  return {
    type:SELECT_REDDIT,
    reddit
  };
}

export function requestReddit(reddit){
	return {
		type:REQUEST_POSTS,
		reddit
	}
}

export function receivePosts(reddit,jsonData){
	var receivedAt = new Date();
	var posts = jsonData.data.children.map(post=>post.data);
	// console.log('posts', posts);
	return {
		type: RECEIVE_POSTS,
		reddit,
		posts:posts,
		receivedAt
	}
}

export function refreshReddit(reddit){
	return {
		type:REFRESH_REDDIT,
		reddit
	}
}

export function fetchPosts(reddit) {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
  	dispatch(requestReddit(reddit));
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
    	.then(response => response.json())
    	.then(jsonData => dispatch(receivePosts(reddit,jsonData)) )
  };
}




