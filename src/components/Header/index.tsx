import NavLink from './NavLink';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projects" path="/projects" includes/>
        <NavLink title="Forms" path="/forms" />
      </ul>
    </Container>
  );
}

export default Header;
