import styled from 'styled-components';

export const CardsWrapper = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 912px) {
    width: 800px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;