import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import { Container } from './styles';

const FormPage: React.FC = () => {
  return (
    <Container>
      <SectionTitle 
      title={
        <>
          How would you be in an RPG ?
        </>
      }
      description={
        <>
         Fill out the form below to find out more
        </>
      }
      />
      <Link href="/forms">
        <button>Forms</button>
      </Link>
    </Container>
  );
};

export default FormPage;
