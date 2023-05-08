import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding-top: 16px;
  padding-bottom: 16px;
  isolation: isolate;
  width: 100%;
  height: 48px;

  background-color: var(--active-item-sidebar-background);
  border: var(--border-AddTaskBtn);
  border-radius: 8px;

  transition: background-color var(--animation), box-shadow var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover-active-item-sidebar-background);
  }
`;

export const AddTask = styled.span`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  color: var(--primary-text-color);
`;

export const Plus = styled(AddTask)`
  margin-bottom: 4px;

  font-weight: 300;
  font-size: 32px;
`;
