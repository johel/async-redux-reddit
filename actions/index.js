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
	return {
		type: RECEIVE_POSTS,
		reddit,
		posts: jsonData.data.children,
		receivedAt
	}
}

export function refreshReddit(reddit){
	return {
		type:REFRESH_REDDIT,
		reddit
	}
}


