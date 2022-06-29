import { FieldError, UseFormRegister } from 'react-hook-form';
import { Profile } from '../Form';
import { Input, TextContainer } from './styles';

interface StepThreeProps {
  register: UseFormRegister<Profile>
  errors: {
    email?: FieldError;
    errors?: FieldError;
}
}

const StepThree: React.FC<StepThreeProps> = ({ register, errors }) => {

  return (
    <TextContainer>
        <Input 
          {...register('email')} 
          placeholder="E-mail"
          id="email" name="email"
          type="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </TextContainer>
  );
};
export default StepThree;