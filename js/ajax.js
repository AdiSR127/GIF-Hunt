function getgif(gif){
    const URL= `https://g.tenor.com/v1/search?q=${gif}&key=3WX5UQUWY97F`;
    
    const promise = fetch(URL);
    return promise;
}