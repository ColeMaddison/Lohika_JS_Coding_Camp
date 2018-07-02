let checkEmail = (value) => {
    return /^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(value);
}

export default checkEmail;
