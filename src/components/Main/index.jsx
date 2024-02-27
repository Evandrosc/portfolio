import styled from 'styled-components';
import illustration from '../../assets/image/illustration.svg';
import { Btn } from '../UI';
import curriculo from '../../../public/curriculo.pdf'
import smile from '../../assets/image/smile.svg';
import email from '../../assets/image/email.svg';
import instagram from '../../assets/image/instagram.svg';
import phone from '../../assets/image/phone.svg';
import mundoNerdNaped from '../../../public/image/mundoNerdNaped.webp';
import projetoProvedor from '../../../public/image/projetoProvedor.webp';
import foodJP from '../../../public/image/foodJP.webp';
import code from '../../assets/image/code.svg';
import figma from '../../assets/image/figma.svg';
import smartphone from '../../assets/image/smartphone.svg';
import html from '../../assets/image/html.svg';
import css from '../../assets/image/css.svg';
import javascript from '../../assets/image/javascript.svg';
import styledComponents from '../../assets/image/styledComponents.svg';
import react from '../../assets/image/react.svg';
import next from '../../assets/image/next.svg';
import { Element } from 'react-scroll';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    @media screen and (max-width: 830px) {
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

  @media screen and (max-width: 830px) {
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

const BtnCv = styled(Btn)`
  background-color: var(--brand-color);
  color: var(--dark-10);
  width: 8.9375rem;
  transition: .4s;

  &:hover {
    background-color: transparent;
    border: 1px solid var(--brand-color);
    color: var(--branco);
  }
`

const BtnContato = styled(Btn)`
  color: var(--dark-50);
  border: 1px solid var(--dark-40);
  width: 8.9375rem;
  transition: .4s;

  &:hover {
    border-color: var(--brand-color);
  }
`

const SectionSobreMim = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 7rem 0;

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
    padding: 0 14%;
    line-height: 2rem;

    @media screen and (max-width: 830px) {
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
  margin: 3rem 0;

  > h2 {
    color: var(--dark-50);
    font-weight: var(--bold);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2vw;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--dark-30);
      padding: 1.5rem;
      width: 23.6vw;

      @media screen and (max-width: 1100px) {
        width: 36.1vw;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      > img {
        width: 100%;
      }

      > h3 {
        color: var(--branco);
        font-size: 1.125rem;
        font-weight: var(--medium);
        margin: 1rem 0 .4rem 0;
      }

      > h4 {
        color: var(--dark-40);
        font-size: .875rem;
        margin-bottom: .7rem;
      }

      > div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`

const BtnDeploy = styled(Btn)`
  background-color: var(--brand-color);
  color: var(--dark-10);
  width: 45%;
  transition: .3s;

  &:hover {
    background-color: transparent;
    border: 1px solid var(--brand-color);
    color: var(--branco);
  }
`

const BtnRepositorio = styled(Btn)`
  border: 1px solid var(--information);
  color: var(--dark-50);
  width: 45%;
  transition: .3s;

  &:hover {
    border-color: var(--brand-color);
    background-color: var(--dark-20);
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 2vw;

    > div {
      background-color: var(--dark-30);
      border-bottom: 3px solid var(--brand-color);
      width: 23.6vw;
      padding: 1rem 0 1rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      gap: 2rem;

      @media screen and (max-width: 900px) {
        width: 100%;
      }

      > h3 {
        color: var(--dark-40);
        width: 5rem;

        @media screen and (max-width: 450px) {
          width: 100%;
        }
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.9vw;

    > figure {
      width: 12.3%;
      padding: 1rem .5rem;
      background-color: var(--dark-30);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 1280px) {
        width: 21.1%;
      }

      @media screen and (max-width: 1024px) {
        width: 29.9%;
      }

      @media screen and (max-width: 480px) {
        width: 47.4%;
        /* height: 22.7vw; */
      }

      > img {
        width: 60%;
        height: 60%;
      }

      > figcaption {
        color: var(--dark-50);
        text-align: center;
      }
    }
  }
`

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
    img: `${mundoNerdNaped}`,
    titulo: 'Mundo Nerd Naped',
    tecnologias: 'React, Styled components, TanStack Query, TypeScript',
    deploy: 'https://mundo-nerd-naped.vercel.app/',
    repositorio: 'https://github.com/Evandrosc/mundo-nerd-naped'
  },
  {
    key: 2,
    img: `${projetoProvedor}`,
    titulo: 'Provedor de Internet',
    tecnologias: 'React, CSS, HTML',
    deploy: 'https://provedor-internet-eight.vercel.app/',
    repositorio: 'https://github.com/Evandrosc/provedorInternet'
  },
  {
    key: 3,
    img: `${foodJP}`,
    titulo: 'FoodJP',
    tecnologias: 'React, TypeScript, Tailwind',
    deploy: 'https://food-jp-jet.vercel.app/',
    repositorio: 'https://github.com/Evandrosc/FoodJP'
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
    titulo: 'Web Ranqueamento'
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
    img: `${html}`,
    nome: 'HTML'
  },
  {
    key: 2,
    img: `${css}`,
    nome: 'CSS'
  },
  {
    key: 3,
    img: `${javascript}`,
    nome: 'javascript'
  },
  {
    key: 4,
    img: `${styledComponents}`,
    nome: 'Styled components'
  },
  {
    key: 5,
    img: `${react}`,
    nome: 'React'
  },
  {
    key: 6,
    img: `${next}`,
    nome: 'Next'
  }
]

const Main = () => {

  return (
    <>
      <Section>
        <Container>
          <h1>Olá, eu sou o Evandro :)</h1>
          <p>Desenvolvedor Front-End</p>
          <div>
            <BtnCv href={curriculo} target="_blank" rel="nofollow download">Download CV</BtnCv>
            <BtnContato href="https://wa.me/5586998200728" target="_blank" rel="external">Entrar em contato</BtnContato>
          </div>
        </Container>
        <img src={illustration} alt='' />
      </Section>

      <Element name='projetos'>
        <SectionProjetos>
          <h2>Projetos</h2>
          <div>
            {projetos.map(projeto => (
              <div key={projeto.key}>
                <img src={projeto.img} alt='' />
                <h3>{projeto.titulo}</h3>
                <h4>Tecnologias: {projeto.tecnologias}</h4>
                <div>
                  <BtnDeploy href={projeto.deploy} target="_blank" rel="external">Deploy</BtnDeploy>
                  <BtnRepositorio href={projeto.repositorio} target="_blank" rel="external">Repositório</BtnRepositorio>
                </div>
              </div>
            ))}
          </div>
        </SectionProjetos>
      </Element>

      <Element name='sobre-mim'>
        <SectionSobreMim>
          <h2>Sobre mim</h2>
          <p>
            Atuo desde 2022 como desenvolvedor desempenhando as melhores práticas para entregar a melhor experiência aos usuários. Cursando 4º período em Análise e Desenvolvimento de Sistemas. Além disso um amante de tecnologia :)
          </p>
          <div>
            {sobreMim.map(informacao => (
              <div key={informacao.key}>
                <img src={informacao.img} alt='' />
                <h3>{informacao.titulo}</h3>
                <h4>{informacao.subTitulo}</h4>
              </div>
            ))}
          </div>
        </SectionSobreMim>
      </Element>

      <Element name='servicos'>
        <SectionServicos>
          <h2>Serviços</h2>
          <div>
            {servicos.map(servico => (
              <div key={servico.key}>
                <img src={servico.img} alt='' />
                <h3>{servico.titulo}</h3>
              </div>
            ))}
          </div>
        </SectionServicos>
      </Element>

      <Element name='skills'>
        <SectionSkills>
          <h2>Minhas skills</h2>
          <div>
            {skills.map(skill => (
              <figure key={skill.key}>
                <img src={skill.img} alt='' />
                <figcaption>{skill.nome}</figcaption>
              </figure>
            ))}
          </div>
        </SectionSkills>
      </Element>
    </>
  );
};

export default Main;