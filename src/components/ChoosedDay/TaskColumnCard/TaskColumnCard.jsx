import PropTypes from 'prop-types';
import { Avatar } from 'components/Avatar/Avatar';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
import { TASK_PRIORITY } from 'constants/taskPriority.constants';

import * as STC from './TaskColumnCard.styled';

export const TaskColumnCard = ({
  title = 'Lorem ipsum dolor sit amet consectetur ',
  priority = TASK_PRIORITY.low,
  ...other
}) => {
  return (
    <STC.Container>
      <STC.TaskTitle>{title}</STC.TaskTitle>
      <STC.Wrapper>
        <STC.Wrapper>
          <STC.TaskAvatarWrapper>
            <Avatar />
          </STC.TaskAvatarWrapper>
          <STC.TaskPriority priority={priority}>{priority}</STC.TaskPriority>
        </STC.Wrapper>
        <TaskToolbar title={title} priority={priority} {...other} />
      </STC.Wrapper>
    </STC.Container>
  );
};
TaskColumnCard.propTypes = {
  title: PropTypes.string.isRequired,
  priority: PropTypes.object.isRequired,
  other: PropTypes.node,
};
