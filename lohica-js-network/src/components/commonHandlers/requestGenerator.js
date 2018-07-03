const contentTypeJson = {
    'Content-Type': 'application/json'
};
const postMethod = 'POST';
const getMethod = 'GET';

// post req obj
export const postGener = (body) => {
    return {
        method: postMethod,
        body: JSON.stringify(body),
        headers: contentTypeJson
    }
}

export const postGenerNoHeaders = (body) => {
    return {
        method: postMethod,
        body: body
    }
}

// get req obj
export const getGener = () => {
    return {
        method: getMethod,
        headers: contentTypeJson
    }
}