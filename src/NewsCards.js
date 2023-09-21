import NewsCard from './NewsCard'


function NewsCards({news, search}) {

  const lowerCaseSearch = search.toLowerCase();

  

  const filterBySearch = search ? news.filter((article) => ((article.title+article.description+article.author+article.content+article.source.name).toLowerCase().includes(lowerCaseSearch))) : news;

  console.log(filterBySearch)
  const newsMap = filterBySearch
    .map((param) => <NewsCard key={param.title} title={param.title} image={param.urlToImage} description={param.description} date={param.publishedAt}/>)

  return (
    <>
      {newsMap}
    </>
  )
} 




export default NewsCards