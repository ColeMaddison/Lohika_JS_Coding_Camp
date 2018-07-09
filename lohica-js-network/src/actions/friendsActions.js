import { addFriendRoute, removeFriendRoute } from '../routes';

export const FRIENDS_ADD = 'FRIENDS_ADD';
export const FRIENDS_REMOVE = 'FRIENDS_REMOVE';

const token = localStorage.getItem('tkn');

export function addToFriendsStore(id) {
    return {
        type: FRIENDS_ADD,
        payload: id
    }
}

export function removeFromFriendsStore(id) {
    return {
        type: FRIENDS_REMOVE,
        payload: id
    }
}

export function addToFriendsDb(id){
    return function (dispatch){
        return fetch(addFriendRoute, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        })
        .then(result => result.json())
        .then(result => {
            if(result.success){
                dispatch(addToFriendsStore(id));
            }
        })
    }
}

export function removeFromFriendsDb(id){
    return function(dispatch){
        return fetch(removeFriendRoute, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        })
        .then(result => result.json())
        .then(result => {
            if(result.success){
                dispatch(removeFromFriendsStore(id));
            }
        });
    }
}