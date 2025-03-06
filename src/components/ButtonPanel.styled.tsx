import styled from 'styled-components';

export const ButtonPanel = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  gap: 10px;

  @media (max-width: 768px) {
    width: 50%;
    flex-direction: column;
  }
`;