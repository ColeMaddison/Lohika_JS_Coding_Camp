// post req obj
export const postGener = (body) => {
    return {
        method: "POST",
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }
}

// get req obj
export const getGener = () => {
    return {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    }
}