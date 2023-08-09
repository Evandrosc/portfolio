import styled from 'styled-components';

const StyledNavbar = styled.nav`
  position: ${props => props.$mobile ? 'absolute' : ''};
  top: ${props => props.$mobile ? '50%' : ''};
  left: ${props => props.$mobile ? '50%' : ''};
  transform: ${props => props.$mobile ? 'translate(-50%, -50%)' : ''};

  clip-path: ${props => props.$mobile ? 'polygon(0 14%, 100% 14%, 100% 100%, 0% 100%)' : ''};
  
  width: ${props => props.$mobile ? '100vw' : ''};
  height: ${props => props.$mobile ? '100vh' : ''};

  display: flex;
  gap: 2rem;
  flex-direction: ${props => props.$mobile ? 'column' : 'row'};
  align-items: ${props => props.$mobile ? 'center' : ''};
  justify-content: ${props => props.$mobile ? 'center' : ''};

  background-color: var(--dark-10);

  > a {
    color: var(--dark-50);
    font-weight: var(--regular);
    width: ${props => props.$mobile ? '100%' : ''};
    font-size: ${props => props.$mobile ? '2rem' : '1.125rem'};
    text-align: ${props => props.$mobile ? 'center' : ''};
    transition: .3s;

    &:hover {
      color: var(--brand-color);
    }
  }
`;



const Navbar = ({ mobile }) => {

  return (
    <StyledNavbar $mobile={mobile}>
      <a href="#">Sobre mim</a>
      <a href="#">Projetos</a>
      <a href="#">Serviços</a>
      <a href="#">Minhas skills</a>
    </StyledNavbar>
  );
};

export default Navbar;