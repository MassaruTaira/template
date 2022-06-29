import React, { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { Profile } from '../Form';
import { Input, TextContainer, Container } from './styles';

interface StepTwoProps {
  register: UseFormRegister<Profile>
  errors: {
    strength?: FieldError;
    intelligence?: FieldError;
    agility?: FieldError;
    resistance?: FieldError;
    aura?: FieldError;
    errors?: FieldError;
  }
}

const StepTwo: React.FC<StepTwoProps> = ({ register, errors }) => {
  const [point, setPoint] = useState(10);
  const handlePointPlus = () => {
    point != 0 ? setPoint(point - 1) : undefined
  }
  const handlePointLess = () => {
    point != 10 ? setPoint(point + 1) : undefined
  }
  const handlePointPlusStrength = () => {
    point != 0 ? setPoint(point - 1) : undefined
  }
  return (
    <TextContainer>
      <h2>Points: {point}</h2>
      <Container>
        <Input
          {...register('strength')}
          placeholder="Strength (1 ~ 5)"
          id="strength"
          name="strength"
          type="number"
          disabled={true}
          value={10 - point}
        />
        <div onClick={handlePointPlusStrength}>+</div>
        <div onClick={handlePointLess}>-</div>
      </Container>
      {errors.strength && <p>{errors.strength.message}</p>}

      <Container>
        <Input
          {...register('intelligence')}
          placeholder="Intelligence (1 ~ 5)"
          id="intelligence"
          name="intelligence"
          type="number"
        />
        <div onClick={handlePointPlus}>+</div>
        <div onClick={handlePointLess}>-</div>
      </Container>
      {errors.intelligence && <p>{errors.intelligence.message}</p>}

      <Container>
        <Input
          {...register('agility')}
          placeholder="Agility (1 ~ 5)"
          id="agility"
          name="agility"
          type="number"
        />
        <div onClick={handlePointPlus}>+</div>
        <div onClick={handlePointLess}>-</div>
      </Container>
      {errors.agility && <p>{errors.agility.message}</p>}

      <Container>
        <Input
          {...register('resistance')}
          placeholder="Resistance (1 ~ 5)"
          id="resistance"
          name="resistance"
          type="number"
        />
        <div onClick={handlePointPlus}>+</div>
        <div onClick={handlePointLess}>-</div>
      </Container>
      {errors.resistance && <p>{errors.resistance.message}</p>}

      <Container>
        <Input
          {...register('aura')}
          placeholder="Aura (1 ~ 5)"
          id="aura"
          name="aura"
          type="number"
        />
        <div onClick={handlePointPlus}>+</div>
        <div onClick={handlePointLess}>-</div>
      </Container>
      {errors.aura && <p>{errors.aura.message}</p>}

    </TextContainer>
  );
};

export default StepTwo;
