const contentTypeJson = {
    'Content-Type': 'application/json'
};
const postMethod = 'POST';
const getMethod = 'GET';

// post req obj
export const postRequest = (body) => {
    return {
        method: postMethod,
        body: JSON.stringify(body),
        headers: contentTypeJson
    }
}

export const postRequestNoHeaders = (body) => {
    return {
        method: postMethod,
        body: body
    }
}

// get req obj
export const getRequest = () => {
    return {
        method: getMethod,
        headers: contentTypeJson
    }
}

// one private method to rule them all