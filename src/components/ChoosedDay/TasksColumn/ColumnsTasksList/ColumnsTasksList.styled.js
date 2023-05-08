import styled from 'styled-components';

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;

  overflow: auto;
  @media (min-width: 768px) {
    gap: 18px;
  }
`;
