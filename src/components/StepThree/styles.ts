import styled from 'styled-components';

export const Container = styled.div``;

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

div {
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}
`;
