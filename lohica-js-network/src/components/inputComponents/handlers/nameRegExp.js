export let nameRegExp = (value) => {
    return /^([a-zA-Z]{1,32})$/.test(value);
}
