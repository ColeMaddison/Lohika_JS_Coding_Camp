import { addFriendRoute, removeFriendRoute, getFriendsRoute } from '../routes';

export const FRIENDS_ADD = 'FRIENDS_ADD';
export const FRIENDS_INFO_ADD = 'FRIENDS_INFO_ADD';
export const FRIENDS_REMOVE = 'FRIENDS_REMOVE';

const token = localStorage.getItem('tkn');

// add friend id to user store
export function addToFriendsStore(id) {
    return {
        type: FRIENDS_ADD,
        payload: id
    }
}

// remove friend id from user store
export function removeFromFriendsStore(id) {
    return {
        type: FRIENDS_REMOVE,
        payload: id
    }
}

// add user friends info to the store
export function addFriendsInfoToStore(friendsArr){
    return {
        type: FRIENDS_INFO_ADD,
        payload: friendsArr
    }
}

// add friend in db and call add friend to store function
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

// remove friend if from db and call remove if from user store function
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

// get user friends info 
export function getUserFriendsInfo(id){
    return function(dispatch){
        return fetch(getFriendsRoute, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(result => result.json())
        .then(result => {
            if(result.success){
                dispatch(addFriendsInfoToStore(result.message));
            }
        })
    }
}