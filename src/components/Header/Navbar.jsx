import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledNavbar = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: var(--dark-10);

  ${props => props.$mobile && `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    clip-path: polygon(0 14%, 100% 14%, 100% 100%, 0% 100%);
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  `}
`;

const StyledLink = styled(Link)`
  color: var(--dark-50);
  font-weight: var(--regular);
  font-size: ${props => props.$mobileFont};
  cursor: pointer;
  transition: .3s;

  &:hover {
    color: var(--brand-color);
  }
`;

const NavLinks = [
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre-mim', label: 'Sobre mim' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'skills', label: 'Minhas skills' },
];

const Navbar = ({ mobile, onCloseMenu }) => {
  const mobileFont = mobile ? '2rem' : '1.125rem';

  return (
    <StyledNavbar $mobile={mobile}>
      {NavLinks.map(navLink => (
        <StyledLink
          key={navLink.id}
          to={navLink.id}
          smooth={true}
          duration={500}
          offset={-50}
          $mobileFont={mobileFont}
          onClick={onCloseMenu}
        >
          {navLink.label}
        </StyledLink>
      ))}
    </StyledNavbar>
  );
};

export default Navbar;