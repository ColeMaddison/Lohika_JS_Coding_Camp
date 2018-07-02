export let emailRegExp = (value) => {
    return /^[\w]+@[\w]+\.[a-zA-z]{2,}$/i.test(value);
}
