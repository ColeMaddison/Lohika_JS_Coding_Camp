


export let loginFormSubmit = (ev, emailValid, email, password, dispatch) => {
    
    // let token = localStorage.getItem('tkn');
    // if(token) {
    //     fetch('/checkToken', {
    //         method: 'POST',
    //         body: JSON.stringify({'token': token}),
    //         headers: {'Content-Type': 'application/json'}
    //     }).then(res => res.json())
    //         .then(res => console.log(res));
    // } else {
        if(emailValid && password){
            fetch('/login', {
                method: 'POST',
                body: JSON.stringify({
                    'email': email,
                    'password': password
                }),
                headers: {'Content-Type': 'application/json'}
            }).then(mes => mes.json())
                .then(result => result.userToken ? localStorage.setItem('tkn', result.userToken) : localStorage.removeItem('tkn'))
                .then(result => {
                    dispatch({type: 'LOG_IN_SUCCESS'})
                })
        } else {
            localStorage.removeItem('tkn');
        }
    }   
// }