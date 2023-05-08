import { TASK_PRIORITY } from 'constants/taskPriority.constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  padding: 14px 15px 18px 14px;
  width: 100%;

  background-color: var(--secondary-background-color);
  border: var(--border);
  border-radius: 8px;

  @media (min-width: 1280px) {
    min-height: 100px;
    padding-top: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`;

export const TaskTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
`;

export const TaskAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

export const TaskPriority = styled.p`
  padding: 4px 12px;

  background: var(
    ${props => {
      if (props.priority === TASK_PRIORITY.medium) {
        return '--task-priority-medium-color';
      }
      if (props.priority === TASK_PRIORITY.high) {
        return '--task-priority-high-color';
      }
      return '--task-priority-low-color';
    }}
  );
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;

  color: var(--btn-text-color);
`;
