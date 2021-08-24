function getgif(gif){
    const URL= `https://api.giphy.com/v1/channels/search?api_key=i2a3h1lpMDsNoilscjTy0HJLDxTBUqyD&q=${gif}`;
    const promise = fetch(URL);
    return promise;
}