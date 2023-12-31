import Nav from './Nav'
import Main from './Main'
import styled from 'styled-components';

const StyledContain = styled.div `
display: flex;
flex-direction: column;
min-height: 100vh;
min-width: 100vw;
`


function Home({news, handleSearch, search, newsInfoFunc}) {



  return (
    <StyledContain>
      <Nav news={news} handleSearch={handleSearch} search={search}/>
      <Main news={news} search={search} newsInfoFunc={newsInfoFunc}/>
    </StyledContain>
  )
} 




export default Home