export let loginFormSubmit = (ev, emailValid, email, password) => {
    
    if(emailValid && password){

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                'email': email,
                'password': password
            }),
            headers: {'Content-Type': 'application/json'}
        }).then(mes => mes.json())
            .then(result => result.userToken ? localStorage.setItem('tkn', result.userToken) : console.log(result.message))
    } else {
        localStorage.removeItem('tkn');
    }
    let token = localStorage.getItem('tkn');
    
    if(token) {
        fetch('/checkToken', {
            method: 'POST',
            body: JSON.stringify({'token': token}),
            headers: {'Content-Type': 'application/json'}
        }).then(res => console.log(res))
    } else {
        console.log('enter data');
    }
}
