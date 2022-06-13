import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../../components/HomeHero';
import Header from '../../components/Header';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Knowledge from '../../components/Knowledge';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experience />
        <Projects />
        <Knowledge />
        {/* <Form /> */}
      </main>

      <Footer />
    </HomeContainer>
  );
}
