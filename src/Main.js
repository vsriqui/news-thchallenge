import styled from 'styled-components';
import NewsCards from './NewsCards'

const StyledMain = styled.main `
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
min-width: 95vw;
min-height: 75vh;
border: 2px double black;
margin: 1%;
`

function Main({news, search}) {

  return (
    <StyledMain>
      <NewsCards news={news} search={search}/>
    </StyledMain>
  )
} 




export default Main