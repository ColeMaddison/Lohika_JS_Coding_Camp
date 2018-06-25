let emailRegExp = (value) => {
    return /^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(value);
}

let nameMidSurRegExp = (value) => {
    return /^([a-zA-Z]{1,32})$/.test(value);
}

module.exports = {
    emailRegExp,
    nameMidSurRegExp
}