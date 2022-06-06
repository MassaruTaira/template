import SectionTitle from '../SectionTitle';
import FormItem from './FormItem';
import { Container } from './styles';

function Form() {
  return (
    <Container>
      <SectionTitle 
      title={
        <>
          How would you be
          <br />
          in an RPG ?
        </>
      }
      description={
        <>
         Fill out the form below
         <br />
         to find out more
        </>
      }
      />

      <FormItem />
    </Container>
  );
};

export default Form;
