import styled from 'styled-components';

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  //display: grid;
  //grid-template-columns: 1fr 1fr;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.primary};
  }

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;
    width: fit-content;
    margin-top: 1rem;
    margin-right: 1rem;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      opacity: 0.9;
    }
  }

  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

