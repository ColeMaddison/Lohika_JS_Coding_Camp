// import { authHeader } from './authHeader';

const login = (username, password) => {
    const reqOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({username, password})
    }

    return fetch('/login', reqOptions)
        .then(handleResponse)
        .then(token => {
            if(token) {
                localStorage.setItem('tkn', token);
            }
            return token;
        });
}

const logout = () => {
    localStorage.removeItem('tkn');
}

const handleResponse = (response) => {
    return response.json().then(data => {
        if(!response.ok) {
            if(response.status === 401) {
                logout();
                location.reload(true);
            }
            return Promise.reject((data && data.error) || response.statusText);
        }
        return data;
    })
}  


export const userReqEmitter = {
    login,
    logout
}