import styled from 'styled-components';

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  margin-top: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width:450px){
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextContainer = styled.section`
p {
  color:#f00
}

h2 { 
  color: ${({ theme }) => theme.primary};
}

div {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.2rem;
  color: #000;
}
`;

export const Container = styled.section`
  display: flex;
  flex-direction: line; 
  gap: 0.8rem;
  align-items: center;
  justify-content: right;

  h2{
    color: ${({ theme }) => theme.secondary};
    justify-content: right;
  }
`;
