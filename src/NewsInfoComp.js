import GoHome from './GoHome'
import styled from 'styled-components';
import {useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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
backdrop-filter: brightness(110%);
`

const StyledInfo = styled.div `
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
min-height: 100vh;
border: 2px double black;
margin: .4%; 
`

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 45vh; /* Adjust this value if needed */
  border: 2px solid grey;
  margin: 1%;
  object-fit: cover;
  backdrop-filter: brightness(110%);
`;

const Content = styled.p `
font-size: 2.1vw;
display: block;
text-align: center;
min-width: .5vw;
border: 2px double black;
padding: 1%;
font-family: 'Tinos', serif;
font-weight: 400;
word-break: break-word;
margin: .3%;
backdrop-filter: brightness(110%);
`

const Extra = styled.h4 `
font-size: 2vw;
display: block;
text-align: center;
min-width: .5vw;
border: 2px double black;
padding: 1%;
margin: .3%;
font-family: 'Tinos', serif;
font-weight: 400;
word-break: break-word;
backdrop-filter: brightness(110%);
`

function NewsInfoComp({title, image, date, author, content, source}) {
  console.log(source, "sourceeeeeee")


  const navigate = useNavigate();

  useEffect(()=>{
  if (!title) {
    navigate('/');
  }
}, [navigate, title])

  return (
    <StyledInfo>
      <GoHome/>
      <Title> {title} </Title>
      <Image src={image} alt='Picture of the story' />
      <Content> Main Article: {content} </Content> 
      <Extra> Date: {date} </Extra>
      <Extra> Authors: {author} </Extra>
      {source && <Extra> Publication: {source} </Extra>}
    </StyledInfo>
  )
} 




export default NewsInfoComp