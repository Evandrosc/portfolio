import styled, { css } from 'styled-components';

const StyledMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }

  div {
    width: 32px;
    height: 2px;
    background-color: var(--branco);
    margin: 8px;
    transition: transform 0.4s, opacity 0.4s;

    ${({ $isActive }) =>
      $isActive &&
      css`
        &:nth-child(1) {
          transform: rotate(-45deg) translate(-8px, 8px);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(45deg) translate(-6px, -6px);
        }
      `}
  }
`;

const MenuIcon = ({ isActive, onClick }) => {

  const handleClick = () => {
    onClick();
    // Revertendo o estado do ícone após o clique
  };

  return (
    <StyledMenuIcon $isActive={isActive} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledMenuIcon>
  );
};

export default MenuIcon;