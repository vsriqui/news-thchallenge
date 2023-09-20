import styled from 'styled-components';

const StyledMain = styled.main `
display: flex;
flex-direction: column;
min-width: 95vw;
min-height: 75vh;
border: 2px double black;
margin: 1%;
`

function Main({news}) {

  return (
    <StyledMain>
      <h2> hello</h2>
    </StyledMain>
  )
} 




export default Main