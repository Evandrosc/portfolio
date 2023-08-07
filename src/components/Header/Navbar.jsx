import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  gap: 2rem;
  width: ${props => props.$mobile ? '100vw' : ''};
  height: ${props => props.$mobile ? '100vh' : ''};
  flex-direction: ${props => props.$mobile ? 'column' : 'row'};
  align-items: ${props => props.$mobile ? 'center' : ''};
  justify-content: ${props => props.$mobile ? 'center' : ''};
  margin-left: ${props => props.$mobile ? 'calc(36vw - 50%)' : ''};
  margin-top: ${props => props.$mobile ? 'calc(34vw - 50%)' : ''};

  > a {
    color: var(--dark-50);
    font-weight: var(--regular);
    width: ${props => props.$mobile ? '100%' : ''};
    font-size: ${props => props.$mobile ? '2rem' : '1.125rem'};
    text-align: ${props => props.$mobile ? 'center' : ''};
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