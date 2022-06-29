import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import Form from '../components/FormPage';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
        <Projects />
        <Knowledge />
        <Form />
      </main>

      <Footer />
    </HomeContainer>
  );
}
export default Home;