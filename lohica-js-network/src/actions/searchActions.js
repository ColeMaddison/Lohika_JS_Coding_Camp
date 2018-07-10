import { searchRoute } from '../routes';
export const SEARCH_RESULT = 'SEARCH_RESULT';
export const SEARCH_RESULT_EMPTY = 'SEARCH_RESULT_EMPTY';

export function setSearchResult(result) {
    return {
        type: SEARCH_RESULT,
        payload: result
    }
}

export function emptySearchResult() {
    return {
        type: SEARCH_RESULT_EMPTY
    }
}

export function searchUsers (queueString, userId) {
    const token = localStorage.getItem('tkn');
    
    return function(dispatch){
        return fetch(`${searchRoute}?q=${queueString}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(result => result.json())
            .then(result => {
                if(result.users){
                    const filteredResult = result.users.filter(user => user._id !== userId);
                    // filter out search of the current user, to not be able to self add to friends
                    filteredResult.length ? dispatch(setSearchResult({users: filteredResult})) : dispatch(emptySearchResult());
                } else {
                    dispatch(setSearchResult(result))
                }
            });
    };
}
