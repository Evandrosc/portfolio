import styled from 'styled-components'

const Rodape = styled.footer`
  background-color: var(--dark-20);
  padding: 1rem;
  max-width: 1680px;

  > p {
    text-align: center;
    color: var(--dark-50);

    > a {
      color: var(--brand-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Footer = () => {
  return (
    <Rodape>
      <p>Orgulhosamente feito por <a href="https://www.linkedin.com/in/dev-evandro/" rel="noreferrer" target='_blank'>Evandro</a></p>
    </Rodape>
  );
};

export default Footer;