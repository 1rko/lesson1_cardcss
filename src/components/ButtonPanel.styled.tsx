import styled from 'styled-components';

export const ButtonPanel = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;