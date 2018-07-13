import { feedListRoute, feedRoute } from '../routes';
import { postRequestWithTokenNoHeaders, getRequestWithTokenNoContentType } from '../components/commonHandlers/requestGenerator';

export const NEWS_FEED_POPULATE_STORE = 'NEEWS_FEED_POPULATE_STORE';
export const NEWS_FEED_CLEAR_STORE = 'NEWS_FEED_CLEAR_STORE';

export const NEWS_FEED_ADD_MESSAGE = 'NEWS_FEED_ADD_MESSAGE';
export const NEWS_FEED_ADD_IMAGE = 'NEWS_FEED_ADD_IMAGE';
export const NEWS_FEED_SAVE_POST_IMAGE = 'NEWS_FEED_SAVE_POST_IMAGE';
export const NEWS_FEED_CLEAR_POST_INFO = 'NEWS_FEED_CLEAR_POST_INFO';
export const NEWS_FEED_ADD_POST_INFO_STORE = 'NEWS_FEED_ADD_POST_INFO_STORE';

export function newsFeedPopulateStore(newsArr){
    return {
        type: NEWS_FEED_POPULATE_STORE,
        payload: newsArr
    }
}

export function newsMessageAddToStore(message) {
    return {
        type: NEWS_FEED_ADD_MESSAGE,
        payload: message
    }
}

export function newsImageAddToStore(message) {
    return {
        type: NEWS_FEED_ADD_IMAGE,
        payload: message
    }
}

export function newsAddPostInfoToStore(info){
    return {
        type: NEWS_FEED_ADD_POST_INFO_STORE,
        payload: info
    }
}

export function newsClearPostInfo(){
    return {
        type: NEWS_FEED_CLEAR_POST_INFO
    }
}

export function newsSavePostTextImage(message) {
    const token = localStorage.getItem('tkn');
    return function(dispatch){
        return fetch(
            feedRoute,
            postRequestWithTokenNoHeaders(token, message)
        )
        .then(res => res.json())
        .then(res => {
            dispatch(newsAddPostInfoToStore(res.data));
            dispatch(newsClearPostInfo());
        })
    }
}

export function getUsersNewsFeed(){
    const token = localStorage.getItem('tkn');

    return function(dispatch){
        return fetch(
            feedListRoute,
            getRequestWithTokenNoContentType(token)
        )
        .then(res => res.json())
        .then(res => {
            res.totalNews.sort((a, b) => b.date.localeCompare(a.date));
            dispatch(newsFeedPopulateStore(res.totalNews));
        })
    }
}

export function newsFeedClearStore(){
    return {
        type: NEWS_FEED_CLEAR_STORE
    }
}