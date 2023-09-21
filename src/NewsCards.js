import styled from 'styled-components';
import NewsCard from './NewsCard'



function NewsCards({news}) {

  const newsMap = news
    .map((param) => <NewsCard title={param.title} image={param.urlToImage} description={param.description} date={param.publishedAt}/>)

  // console.log(news)
  return (
    <>
      {newsMap}
    </>
  )
} 




export default NewsCards