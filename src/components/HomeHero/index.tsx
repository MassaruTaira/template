/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
//import picture from '../../src/assets/';

const HomeHero: React.FC = () => {
  return (
    <Container>
      <img src="../public/assets/RobenCookie.jpg" />
      <div>
        <TextContainer>
          <h1>Hello</h1>
          <h2>My name is Yohan</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//My presentation</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Yohan,</span>
            </div>
            <div>
              Last name: <span className="blue">Taira</span>
            </div>
            {'\u007B'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Office</span> {'\u007B'}
            <div>
              Function: <span className="blue">Dev. Front-End,</span>
            </div>
            <div>
              Company: <span className="blue">Venturus</span>
            </div>
            {'\u007B'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
