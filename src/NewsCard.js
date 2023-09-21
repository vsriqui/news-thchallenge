import { Link } from 'react-router-dom';
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
margin: .3%;
`
const ImageMini = styled.img`
  width: 100%;
  height: auto;
  max-height: 45vh; /* Adjust this value if needed */
  border: 2px solid grey;
  margin: 1%;
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
margin: .3%;
`

const DateMini = styled.h4 `
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
`


function NewsCard({ title, image, description, date, newsInfoFunc}) {

  const handleNewsInfo = () => {
    newsInfoFunc(title);
    console.log('sadsadasdasd')
  };

  // console.log(title, image, description, date)
  return (
    <>
    <StyledMini tabIndex={0}>
      <Link to={`title/${title}`} onClick={handleNewsInfo}>
        <DateMini> Click for whole article </DateMini>
      </Link>
      <TitleMini> {title} </TitleMini> 
      <ImageMini src={image} alt='Picture of the story' />
      <DescriptionMini> {description} </DescriptionMini>
      <DateMini> {date} </DateMini>
    </StyledMini>
    
    </>
  )
} 




export default NewsCard