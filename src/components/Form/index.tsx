import React, { useState } from 'react';
import { FormContainer } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from "../../components/Modal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const { register, handleSubmit, trigger, setValue, getValues, formState: { errors } } = useForm<Profile>(
    { resolver: yupResolver(currentValidationSchema) }
  )

  const toggleModal = () => {
    setIsModalOpen(wasModalOpen => !wasModalOpen)
  }

  const formSteps = [
    <StepOne key='StepOne' register={register} errors={errors} />,
    <StepTwo key='StepTwo' register={register} errors={errors} setValue={setValue} />,
    <StepThree key='StepThree' register={register} errors={errors} />,
  ];

  const isFinalStep = currentStep + 1 === formSteps.length;

  const onSubmit = handleSubmit((form) => { (JSON.stringify(form)) })

  const handleBackStep = () => {
    currentStep != 0 ? setCurrentStep(currentStep - 1) : undefined;
  }

  const handleNextStep = async () => {
    const arrayAttribute = getValues(["strength", "intelligence", "agility", "resistance", "aura"]);
    let totalAttribute = 0;
    for (let i = 0; i < arrayAttribute.length; i++) {
      totalAttribute += arrayAttribute[i]
    }
    
    if (currentStep === 0) {
      const isStepValid = await trigger()
      if (isStepValid) setCurrentStep(currentStep + 1);
      return
    }
    if (currentStep === 1 && totalAttribute === 10) {
      const isStepValid = await trigger()
      if (isStepValid) setCurrentStep(currentStep + 1);
    }else{
      alert("Por favor, utilizar todos os pontos.")
    }
  };

  const handleSubmitForm = async () => {
    const isStepValid = await trigger(["email"]);

    if (isStepValid) {
      setIsModalOpen(wasModalOpen => !wasModalOpen)
    }
  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <h1>STEP {currentStep + 1}</h1>

      {formSteps.map((form, formIndex) => (
        <div key={form.key} style={{ display: currentStep === formIndex ? '' : 'none' }}>
          {form}
        </div>
      ))}

      {currentStep != 0 ? (
        <button onClick={handleBackStep} type="button">
          Back
        </button>
      ) : undefined}

      {isFinalStep ? (
        <button onClick={handleSubmitForm} type='button'>
          Submit
        </button>
      ) : (
        <button onClick={handleNextStep} type='button'>
          Next
        </button>
      )}
      <div id='modal'></div>
      <Modal
      isOpen={isModalOpen}
      onClose={toggleModal}
      >
        <div className="modal">{"Nickname: " + getValues().nickname}</div>
        <div>{"Age: " + getValues().age}</div>
        <div>{"Strength: " + getValues().strength}</div>
        <div>{"Intelligence: " + getValues().intelligence}</div>
        <div>{"Agility: " + getValues().agility}</div>
        <div>{"Resistance: " + getValues().resistance}</div>
        <div>{"Aura: " + getValues().aura}</div>
        <div>{"E-mail: " + getValues().email}</div>
      </Modal>
    </FormContainer>
  )
}

export default Form;