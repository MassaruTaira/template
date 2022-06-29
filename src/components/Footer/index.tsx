import { 
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin 
} from 'react-icons/ai';
import { Container } from './styles';

const Footer: React.FC = () => {
  const handleRendering = (url: string) => {
    window.open(url);
  }
  
  const handleScrollTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>Back to the top</button>
        <section>
          <AiOutlineTwitter 
            onClick={() => handleRendering('https://twitter.com/')}
            />
          <AiOutlineGithub
            onClick={() => handleRendering('https://github.com/')}
            />
          <AiFillLinkedin
            onClick={() => handleRendering('https://linkedin.com')}
            />
        </section>
      </div>
    </Container>
  );
};

export default Footer;
