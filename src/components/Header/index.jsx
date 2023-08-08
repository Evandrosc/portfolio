import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import MenuIcon from './MenuIcon';

const HeaderContainer = styled.header`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;

    @media screen and (max-width: 768px) {
      margin-bottom: 0;
    }

    > h1 {
      color: var(--dark-50);
      font-size: 1.625rem;
      font-weight: var(--bold);
      cursor: pointer;
      transition: .3s;

      &:hover {
        color: var(--dark-40);
      }
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const shouldShowNavbar = windowWidth > 768;
  const shouldShowMobileNavbar = isMenuOpen && windowWidth <= 768;

  return (
    <HeaderContainer>
      <div>
        <h1>Portfólio</h1>
        {shouldShowNavbar && <Navbar />}
        <MenuIcon isActive={isMenuOpen} onClick={toggleMenu} />
      </div>
      {shouldShowMobileNavbar && <Navbar mobile={isMenuOpen} />}
    </HeaderContainer>
  );
};

export default Header;