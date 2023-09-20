import styled from 'styled-components';
import NewsCards from './NewsCards'

const StyledMain = styled.main `
display: flex;
flex-direction: row;
flex-wrap: wrap;
min-width: 95vw;
min-height: 75vh;
border: 2px double black;
margin: 1%;
`

function Main({news}) {

  return (
    <StyledMain>
      <NewsCards news={news}/>
    </StyledMain>
  )
} 




export default Main