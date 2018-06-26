// post req obj
let postGener = (body) => {
    return {
        method: "POST",
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    }
}

// get req obj
let getGener = () => {
    return {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    }
}