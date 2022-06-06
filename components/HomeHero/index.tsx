/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
// import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container>
      <img src="../src/assets/RobenCookie.jpg" alt="/" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Yohan</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Yohan,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Taira</span>
            </div>
            {'\u007B'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev. Front-End,</span>
            </div>
            <div>
              Empresa: <span className="blue">Venturus</span>
            </div>
            {'\u007B'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
