import React, { useState } from 'react';
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Profile } from '../Form';
import { Input, TextContainer, Container } from './styles';

interface StepTwoProps {
  register: UseFormRegister<Profile>
  setValue: UseFormSetValue<Profile>
  errors: {
    strength?: FieldError;
    intelligence?: FieldError;
    agility?: FieldError;
    resistance?: FieldError;
    aura?: FieldError;
    errors?: FieldError;
  }
}

const StepTwo: React.FC<StepTwoProps> = ({ register, setValue, errors }) => {
  const [point, setPoint] = useState(10);
  const [sthPoint, setSthPoint] = useState(null);
  const [intPoint, setIntPoint] = useState(null);
  const [aglPoint, setAglPoint] = useState(null);
  const [resPoint, setResPoint] = useState(null);
  const [auPoint, setAuPoint] = useState(null);

  const handlePoint = (attribute, setAttribute, operation, attributeName) => {
    if (operation === "plus") {
      if (attribute !== 5 && point !== 0) {
        setAttribute(attribute + 1)
        setPoint(point - 1)
        setValue(attributeName, attribute + 1)
      }
    }
    if (operation === "minus") {
      if (attribute !== 1) {
        setAttribute(attribute - 1)
        setPoint(point + 1)
        setValue(attributeName, attribute - 1)
      }
    }
  }

  return (
    <TextContainer>
      <h2>Points: {point}</h2>
      <Container>
        <h2>Strength</h2>
        <Input
          {...register('strength')}
          placeholder="(1 ~ 5)"
          id="strength"
          name="strength"
          type="number"
          disabled={true}
          value={sthPoint}
        />
        <div onClick={() => handlePoint(sthPoint, setSthPoint, "plus", "strength")}>+</div>
        <div onClick={() => handlePoint(sthPoint, setSthPoint, "minus", "strength")}>-</div>
      </Container>
      {errors.strength && <p>{errors.strength.message}</p>}

      <Container>
        <h2>Intelligence</h2>
        <Input
          {...register('intelligence')}
          placeholder="(1 ~ 5)"
          id="intelligence"
          name="intelligence"
          type="number"
          disabled={true}
          value={intPoint}
        />
        <div onClick={() => handlePoint(intPoint, setIntPoint, "plus", "intelligence")}>+</div>
        <div onClick={() => handlePoint(intPoint, setIntPoint, "minus", "intelligence")}>-</div>
      </Container>
      {errors.intelligence && <p>{errors.intelligence.message}</p>}

      <Container>
        <h2>Agility</h2>
        <Input
          {...register('agility')}
          placeholder="(1 ~ 5)"
          id="agility"
          name="agility"
          type="number"
          disabled={true}
          value={aglPoint}
        />
        <div onClick={() => handlePoint(aglPoint, setAglPoint, "plus", "agility")}>+</div>
        <div onClick={() => handlePoint(aglPoint, setAglPoint, "minus", "agility")}>-</div>
      </Container>
      {errors.agility && <p>{errors.agility.message}</p>}

      <Container>
        <h2>Resistance</h2>
        <Input
          {...register('resistance')}
          placeholder="(1 ~ 5)"
          id="resistance"
          name="resistance"
          type="number"
          disabled={true}
          value={resPoint}
        />
        <div onClick={() => handlePoint(resPoint, setResPoint, "plus", "resistance")}>+</div>
        <div onClick={() => handlePoint(resPoint, setResPoint, "minus", "resistance")}>-</div>
      </Container>
      {errors.resistance && <p>{errors.resistance.message}</p>}

      <Container>
        <h2>Aura</h2>
        <Input
          {...register('aura')}
          placeholder="(1 ~ 5)"
          id="aura"
          name="aura"
          type="number"
          disabled={true}
          value={auPoint}
        />
        <div onClick={() => handlePoint(auPoint, setAuPoint, "plus", "aura")}>+</div>
        <div onClick={() => handlePoint(auPoint, setAuPoint, "minus", "aura")}>-</div>
      </Container>
      {errors.aura && <p>{errors.aura.message}</p>}

    </TextContainer>
  );
};

export default StepTwo;
