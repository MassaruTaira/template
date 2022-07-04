import styled from 'styled-components';

export const ModalContainer = styled.div`
background-color: ${({ theme }) => theme.background};
display: flex;
flex-direction: column;
align-items: inherit;
position: relative;
border-radius: 4rem;
`;

export const DesktopContainer = styled(ModalContainer)`
border-radius: 7px;
box-shadow: 0 0 32px rgba(0,0,0,.5);
padding: 40px;
width: 500px;
height: 500px;
font-size: 26px;
color:${({ theme }) => theme.secondary};
`

export const HeaderContainer = styled.h3`
color:${({ theme }) => theme.primary};
font-size: 35px;
line-height: 1em;
font-weight: 300;
margin: 5px 0 10px;
text-align: center;
`