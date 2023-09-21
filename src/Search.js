import styled from 'styled-components'

const StyledSearchContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
border: 2px double black;
margin: .5%;
padding: .5%;
`

const StyledForm = styled.form `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px double black;
width: 98%;
height: 98%;
margin: .2%;
padding: .2%;
backdrop-filter: brightness(110%);
`

const StyledInput = styled.input`
  background-color: ghostwhite;
  text-align: center;
  font-weight: bold;
  font-family: 'Tinos', serif;
  font-weight: 400;
  width: 90%;
  height: 100%;
  margin: .2%;
  padding: .2%;
  &::placeholder {
    opacity: 1;
    color: black;
    font-size: 1.2vw;
  }
`


function Search({ search, handleSearch}) {

  const handledSearchChange = (event) => {
    
    handleSearch(event.target.value)

  };

  const noEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <StyledSearchContainer>
    <StyledForm>
      <StyledInput
        type="text"
        value={search}
        onChange={handledSearchChange}
        onKeyDown={noEnter}
        placeholder="Search by title, content, source, description, and author *when available* :) "
      />
    </StyledForm>
    </StyledSearchContainer>
  );
} 




export default Search