import React, { useState } from 'react';
import { FormContainer} from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import StepOne from '../StepOne';
import StepTwo from '../StepTwo';
import StepThree from '../StepThree';
import * as yup from 'yup';

export type Profile = {
  nickname: string
  age: number
  strength: number
  intelligence: number
  agility: number
  resistance: number
  aura: number
  email: string
  errors: string
}

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const validationSchemaPerStep = [
    yup.object({
    nickname: yup.string().required(),
    age: yup.number().min(16).max(99).required(),
  }).required(),
  yup.object({
    strength: yup.number().min(1).max(5).required(),
    intelligence: yup.number().min(1).max(5).required(),
    agility: yup.number().min(1).max(5).required(),
    resistance: yup.number().min(1).max(5).required(),
    aura: yup.number().min(1).max(5).required(),
  }).required(),
  yup.object({
    email: yup.string().email().required(),
  }).required()];

  const currentValidationSchema = validationSchemaPerStep[currentStep]

  const { register, handleSubmit, trigger, formState: { errors } } = useForm<Profile>(
    {resolver: yupResolver( currentValidationSchema )}
  )

  console.log(errors)

  const formSteps = [
    <StepOne key='StepOne' register={register} errors={errors} />,
    <StepTwo key='StepTwo' register={register} errors={errors} />,
    <StepThree key='StepThree' register={register} errors={errors} />,
  ];

  const isFinalStep = currentStep + 1 === formSteps.length;

  const onSubmit = handleSubmit((form) => { alert(JSON.stringify(form)) })

  const handleBackStep = () => {
    currentStep != 0 ? setCurrentStep(currentStep-1) : undefined;
  }

  const handleNextStep = async () => {
    // let isStepValid
    // switch (currentStep) {
    //   case 0:
    //     isStepValid = await trigger(["nickname", "age"]);
    //     break;
    //   case 1:
    //     isStepValid = await trigger(["strength", "intelligence", "agility", "resistance", "aura"]);
    //     break;
    // }
    const isStepValid = await trigger()
    if (isStepValid) setCurrentStep(currentStep + 1);
  };

  const handleSubmitForm = async() => {
    const isStepValid = await trigger(["email"]);
    console.log(isStepValid);
    if(isStepValid) onSubmit()
  }

  return (
      <FormContainer onSubmit={onSubmit}>
        <h1>STEP {currentStep+1}</h1>

          {formSteps.map((form, formIndex) => (
            <div key={form.key} style={{ display: currentStep === formIndex ? '' : 'none' }}>
              {form}
            </div>
          ))}

        {currentStep != 0 ? (
        <button onClick={handleBackStep} type="button">
          Back
        </button>
        ): undefined}

        {isFinalStep ? (
          <button onClick={handleSubmitForm} type='button'>
            Submit
          </button>
        ) : (
          <button onClick={handleNextStep} type='button'>
            Next
          </button>
        )}

      </FormContainer>
  )
}

export default Form;