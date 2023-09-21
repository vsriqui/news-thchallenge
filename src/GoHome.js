import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledButton = styled.button `

`

function HomeButton() {
    


return (
  <Link to={`/`}>
    <StyledButton> Go 🏠. </StyledButton>
  </Link>
);

}

export default HomeButton