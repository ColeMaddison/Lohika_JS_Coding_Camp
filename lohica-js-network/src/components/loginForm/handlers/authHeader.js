// generate geader with token or return {}
export const authHeader = () => {
    let token = localStorage.getItem('tkn');

    if(token){
        return {'Authorization': `Bearer ${token}`}
    } else {
        return {}
    }
}