


export let loginFormSubmit = (ev, emailValid, email, password, dispatch) => {
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
                    window.location.reload(true);
                })
        } else {
            localStorage.removeItem('tkn');
        }
    }   
// }