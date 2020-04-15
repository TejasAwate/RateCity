export const REQUEST_DATA = 'REQUEST_DATA';
export const RECIEVE_DATA = 'RECIEVE_DATA';
export const INVALID_REQUEST = 'INVALID_REQUEST';

const URL = 'https://blaze.ratecity.com.au/api/search/home-loans?page=';

function requestData(data) {
    return {
        type: REQUEST_DATA,
        data
    }
}

function recieveData(data) {
    return {
        type: RECIEVE_DATA,
        data
    }
}

function fetchPosts(pageNo) {
    if(!pageNo){pageNo = 1;} 
    return dispatch => {
        dispatch(requestData());
        return fetch(URL + pageNo)
            .then(response => response.json())
            .then(json => dispatch(recieveData(json)))
    }
}

function shouldFetchData(state) {
    const post = state.postsReducer.items;
    if (!post) {
        return true;
    }

    if (post.isFetching) {
        return false;
    }
    return post.didInvalidate
}

export function fetchPostIfNeeded() {
    return (dispatch, getState)=> {
        if (shouldFetchData(getState())) {
            return dispatch(fetchPosts())
        }
    }
}

export function fetchMorePost(pageNo) {
    return (dispatch, getState)=> {
        dispatch(fetchPosts(pageNo));
    }
}
