
function getNews(que) {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=99699c820956418fa83a5a084aa33683`, {
    method: "GET",  

  })
    .then((response) => {
      if (response.status >= 400 || !response.ok) {
        throw new Error('Server communication is not ready.');
      }
      return response.json();
    });
}

export {getNews}