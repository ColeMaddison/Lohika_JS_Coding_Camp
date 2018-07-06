import { searchRoute } from '../routes';
export const SEARCH_RESULT = 'SEARCH_RESULT';

export function setsearchResult(result) {
    return {
        type: SEARCH_RESULT,
        payload: result
    }
}

export function searchUsers (queueString) {
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
                console.log(result);
                dispatch(setsearchResult(result));
            });
    };
}
