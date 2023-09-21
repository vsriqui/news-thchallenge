import styled from 'styled-components';

const StyledMini = styled.div `
display: flex;
flex-direction: column;
width: 28vw;
height: 45vh;
border: 2px double black;
margin: .4%;
overflow-y: auto;
overflow-x: hidden;
backdrop-filter: brightness(110%);
`

const TitleMini = styled.h2 `
font-size: 2.5vw;
display: block;
text-align: center;
min-width: .5vw;
border: 2px double black;
padding: 1%;
font-family: 'Tinos', serif;
font-weight: 700;
word-break: break-word;
`
const ImageMini = styled.img`
  width: 100%;
  height: auto;
  max-height: 45vh; /* Adjust this value if needed */
  border: 2px solid grey;
  margin: 2%;
  object-fit: cover; /* This property ensures the image fits without distortion */
`;

const DescriptionMini = styled.p `
font-size: 2.1vw;
display: block;
text-align: center;
min-width: .5vw;
border: 2px double black;
padding: 1%;
font-family: 'Tinos', serif;
font-weight: 400;
word-break: break-word;
`

const DateMini = styled.h4 `
font-size: 2vw;
display: block;
text-align: center;
min-width: .5vw;
border: 2px double black;
padding: 1%;
font-family: 'Tinos', serif;
font-weight: 400;
word-break: break-word;
`


function NewsCard({title, image, description, date}) {

  // console.log(title, image, description, date)
  return (
    <StyledMini>
       <TitleMini> {title} </TitleMini> 
       <ImageMini src={image} alt='Picture of the story' />
       <DescriptionMini> {description} </DescriptionMini>
       <DateMini> {date} </DateMini>
    </StyledMini>
  )
} 




export default NewsCard