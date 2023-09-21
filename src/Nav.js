import styled from 'styled-components';
import Search from './Search'

const StyledNav = styled.nav `
display: flex;
flex-direction: column;
min-width: 95vw;
min-height: 20vh;
border: 2px double black;
margin: 1%;
`

const Title = styled.h1 `
font-size: 5.5vw;
display: block;
text-align: center;
border: 2px double black;
margin: .5%;
padding: .5%;
font-family: 'Tinos', serif;
font-weight: 700;
word-break: break-word;
`

function Nav({news, handleSearch, search}) {

  

  return (
    <StyledNav>
      <Title>📰 The News 📰</Title>
      <Search news={news} handleSearch={handleSearch} search={search}/>
    </StyledNav>
  )
} 




export default Nav