import { FieldError, UseFormRegister } from 'react-hook-form';
import { Profile } from '../Form';
import { Input, TextContainer } from './styles';

interface StepOneProps {
  register: UseFormRegister<Profile>
  errors: {
    nickname?: FieldError;
    age?: FieldError;
    errors?: FieldError;
}
}

const StepOne: React.FC<StepOneProps> = ({ register, errors }) => {

  return (
    <TextContainer>
      <Input 
          {...register('nickname')}
          placeholder="Nick Name"
          id="nickname"
          name="nickname"
          type="text"
        />
        {errors.nickname && <p>{errors.nickname.message}</p>}

        <Input 
          {...register('age')} 
          placeholder="Age your character (16 ~ 99)"
          id="age" name="age"
          type="number"
        />
        {errors.age && <p>{errors.age.message}</p>}
      </TextContainer>
  );
};

export default StepOne;
