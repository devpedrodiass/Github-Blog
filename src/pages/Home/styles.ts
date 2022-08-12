import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 1rem 2rem;
`;

export const HomeContent = styled.div`
  max-width: 864px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const SearchSection = styled.section`
  width: 100%;  
  div {
   display: flex ;
   justify-content: space-between;
   span {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${props => props.theme['base-subtitle']};
  }
  small {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${props => props.theme['base-span']};
   }
  }
  input {
    margin-top: 0.75rem;
    background: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    width: 100%;
    color: ${props => props.theme['base-text']};
    &::placeholder {
      color: ${props => props.theme['base-label']};
    }
  }
`

export const ListSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 2rem;
  
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`