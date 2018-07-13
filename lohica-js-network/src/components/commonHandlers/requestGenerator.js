const contentTypeJson = {
    'Content-Type': 'application/json'
};

const postMethod = 'POST';
const getMethod = 'GET';
const putMethod = 'PUT';
const deleteMethod = 'DELETE';

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

// had to type headers because of the token value
export const getRequestWithToken = (token) => {
    return {
        method: getMethod,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
}

export const getRequestWithTokenNoContentType = (token) => {
    return {
        method: getMethod,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}

export const putRequestWithTokenNoContentType = (token, body) => {
    return {
        method: putMethod,
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body
    }
}

export const postRequestWithToken = (token, id) => {
    return {
        method: postMethod,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    }
} 

export const postRequestWithTokenNoHeaders = (token, id) => {
    return {
        method: postMethod,
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: id
    }
} 

export const deleteRequestWithToken = (token, id) => {
    return {
        method: deleteMethod,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    }
} 