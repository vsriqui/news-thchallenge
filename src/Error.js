import GoHome from './GoHome'
import styled from 'styled-components';
import badpath from './badpath.webp'
import badtalk from './badtalk.png'


const StyledContain = styled.div `
display: flex;
flex-direction: column;
align-items: center;
flex-direction: column;
min-height: 100vh;
width: 100vw;
`

const Image = styled.img`

width: 95vw;
`

function Error({error}) {


  return (
    
    <StyledContain>
      {!error && <GoHome />}
      {error && <h2> Client and server are not on speaking terms at the moment. </h2>}
      {error && <Image src={badtalk} alt='Client and server are not on speaking terms at the moment.'/> }
      {!error && <h2> That resource can not be found. </h2> }
      {!error && <Image src={badpath} alt='That resource can not be found.'/>}
    </StyledContain>
   
  )
} 



export default Error