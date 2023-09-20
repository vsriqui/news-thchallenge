import styled from 'styled-components';
import NewsCard from './NewsCard'

// const StyledMain = styled.main `
// display: flex;
// flex-direction: column;
// min-width: 95vw;
// min-height: 75vh;
// border: 2px double black;
// margin: 1%;
// `



function NewsCards({news}) {

  const newsMap = news
    .map((param) => <NewsCard title={param.title} image={param.urlToImage} description={param.description} date={param.publishedAt}/>)

  console.log(news)
  return (
    <>
      {newsMap}
    </>
  )
} 




export default NewsCards