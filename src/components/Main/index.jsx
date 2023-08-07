import styled from 'styled-components';
import illustration from '../../assets/image/illustration.svg';
import smile from '../../assets/image/smile.svg';
import email from '../../assets/image/email.svg';
import instagram from '../../assets/image/instagram.svg';
import phone from '../../assets/image/phone.svg';
import emDesenvolvimento from '../../assets/image/emDesenvolvimento.svg';
import code from '../../assets/image/code.svg';
import figma from '../../assets/image/figma.svg';
import smartphone from '../../assets/image/smartphone.svg';
import html from '../../assets/image/html.svg';
import css from '../../assets/image/css.svg';
import javascript from '../../assets/image/javascript.svg';
import tailwind from '../../assets/image/tailwind.svg';
import react from '../../assets/image/react.svg';
import next from '../../assets/image/next.svg';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

const Container = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 6rem 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin: 4rem 0;
  }

  > h1 {
    color: var(--dark-50);
    font-size: min(7.6vw, 2.25rem);
    font-weight: var(--bold);
  }

  > p {
    color: var(--dark-40);
    font-size: 1.125rem;
    font-weight: var(--medium);
  }

  > div {
    display: flex;
    gap: 1rem;
  }
`

const Btn = styled.a`
  padding: .7rem 0;
  width: 8.9375rem;
  text-align: center;
  font-size: .875rem;
`

const BtnCv = styled(Btn)`
  background-color: var(--brand-color);
  color: var(--dark-10);
`

const BtnContato = styled(Btn)`
  color: var(--dark-50);
  border: 1px solid var(--dark-30);
`

const SectionSobreMim = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h2 {
    text-align: center;
    color: var(--dark-50);
    font-size: 2rem;
    font-weight: var(--bold);
  }

  > p {
    text-align: center;
    color: var(--dark-40);
    font-weight: var(--regular);
    font-size: 1.125rem;
    padding: 0 12vw;
    line-height: 2rem;

    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }

  > div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
      width: 12rem;

      > img {
        margin-bottom: 1rem;
      }

      > h3 {
        color: var(--dark-50);
        font-weight: var(--bold);
        font-size: 1.125rem;
      }

      > h4 {
        color: var(--dark-40);
        font-weight: var(--regular);
        font-size: 1rem;
      }
    }
  }
`

const SectionProjetos = styled.section`

  margin: 7rem 0;

  > h2 {
    color: var(--dark-50);
    font-weight: var(--bold);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;

    > div {
      background-color: var(--dark-30);
      padding: 1.5rem;
      width: 26.8vw;
      //min-width: 318.237px;

      @media screen and (max-width: 1143px) {
        width: 41vw;
      }

      @media screen and (max-width: 799px) {
        width: 100vw;
      }

      > img {
        width: 100%;
      }

      > h3 {
        color: var(--branco);
        font-size: 1.125rem;
        font-weight: var(--medium);
      }

      > h4 {
        color: var(--dark-40);
        font-size: .875rem;
      }
    }
  }
`

const SectionServicos = styled.section`

  > h2 {
    color: var(--dark-50);
    font-weight: var(--bold);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 650px) {
      justify-content: center;
      gap: 1rem;
    }

    > div {
      background-color: var(--dark-30);
      border-bottom: 3px solid var(--brand-color);
      width: 26.8vw;
      padding: 1rem 0 1rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 2rem;

      @media screen and (max-width: 650px) {
        width: 40vw;
      }

      @media screen and (max-width: 450px) {
      width: 100%;
    }

      > h3 {
        color: var(--dark-40);
        width: 6rem;
      }
    }
  }
`

const SectionSkills = styled.section`
  margin: 7rem 0;

  > h2 {
    color: var(--dark-50);
    font-weight: var(--bold);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  > div {
    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 690px) {
      gap: .5rem 0;
    }

    > div {
      width: 9.375vw;
      max-width: 150px;
      height: 9.375vw;
      max-height: 150px;
      background-color: var(--dark-30);
      display: flex;
      justify-content: center;
      align-items: center; // 5.4rem width

      @media screen and (max-width: 690px) {
        width: 27vw;
        height: 27vw;
      }

      > img {
        width: 60%;
        height: 60%;
      }
    }
  }
`

const Main = () => {

  const sobreMim = [
    {
      key: 1,
      img: `${smile}`,
      titulo: 'Meu Nome',
      subTitulo: 'Evandro Marcos'
    },
    {
      key: 2,
      img: `${email}`,
      titulo: 'E-mail',
      subTitulo: 'evandromdsc@gmail.com'
    },
    {
      key: 3,
      img: `${instagram}`,
      titulo: 'Instagram',
      subTitulo: '@developer.evandro'
    },
    {
      key: 4,
      img: `${phone}`,
      titulo: 'Telefone',
      subTitulo: '(86) 99820-0728'
    }
  ]

  const projetos = [
    {
      key: 1,
      img: `${emDesenvolvimento}`,
      titulo: 'Em Desenvolvimento',
      subTitulo: 'Em Desenvolvimento'
    },
    {
      key: 2,
      img: `${emDesenvolvimento}`,
      titulo: 'Em Desenvolvimento',
      subTitulo: 'Em Desenvolvimento'
    },
    {
      key: 3,
      img: `${emDesenvolvimento}`,
      titulo: 'Em Desenvolvimento',
      subTitulo: 'Em Desenvolvimento'
    },
    {
      key: 4,
      img: `${emDesenvolvimento}`,
      titulo: 'Em Desenvolvimento',
      subTitulo: 'Em Desenvolvimento'
    },
    {
      key: 5,
      img: `${emDesenvolvimento}`,
      titulo: 'Em Desenvolvimento',
      subTitulo: 'Em Desenvolvimento'
    },
    {
      key: 6,
      img: `${emDesenvolvimento}`,
      titulo: 'Em Desenvolvimento',
      subTitulo: 'Em Desenvolvimento'
    }
  ]

  const servicos = [
    {
      key: 1,
      img: `${code}`,
      titulo: 'Criação de sites'
    },
    {
      key: 2,
      img: `${figma}`,
      titulo: 'UI Designer'
    },
    {
      key: 3,
      img: `${smartphone}`,
      titulo: 'Sites responsivos'
    }
  ]

  const skills = [
    {
      key: 1,
      img: `${html}`
    },
    {
      key: 2,
      img: `${css}`
    },
    {
      key: 3,
      img: `${javascript}`
    },
    {
      key: 4,
      img: `${tailwind}`
    },
    {
      key: 5,
      img: `${react}`
    },
    {
      key: 6,
      img: `${next}`
    }
  ]

  return (
    <>
      <Section>
        <Container>
          <h1>Olá, eu sou o Evandro :)</h1>
          <p>Desenvolvedor Front-End</p>
          <div>
            <BtnCv href="#">Download CV</BtnCv>
            <BtnContato href="#">Entrar em contato</BtnContato>
          </div>
        </Container>
        <img src={illustration} alt='avatar' />
      </Section>

      <SectionSobreMim>
        <h2>Sobre mim</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        <div>
          {sobreMim.map(informacao => (
            <div key={informacao.key}>
              <img src={informacao.img} alt='ícone' />
              <h3>{informacao.titulo}</h3>
              <h4>{informacao.subTitulo}</h4>
            </div>
          ))}
        </div>
      </SectionSobreMim>

      <SectionProjetos>
        <h2>Projetos</h2>
        <div>
          {projetos.map(projeto => (
            <div key={projeto.key}>
              <img src={projeto.img} alt="imagem projeto" />
              <h3>{projeto.titulo}</h3>
              <h4>{projeto.subTitulo}</h4>
            </div>
          ))}
        </div>
      </SectionProjetos>
      <SectionServicos>
        <h2>Serviços</h2>
        <div>
          {servicos.map(servico => (
            <div key={servico.key}>
              <img src={servico.img} alt="ícone" />
              <h3>{servico.titulo}</h3>
            </div>
          ))}
        </div>
      </SectionServicos>
      <SectionSkills>
        <h2>Minhas skills</h2>
        <div>
          {skills.map(skill => (
            <div key={skill.key}>
              <img src={skill.img} alt="icone" />
            </div>
          ))}
        </div>
      </SectionSkills>
    </>
  );
};

export default Main;