export const postGenerator = (url, data) => {
    fetch(url,{
        method: 'POST',
        body: data
    })
}
