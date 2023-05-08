import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectIndexCurrentDay,
  selectIsLoading,
  selectTasks,
} from 'redux/calendar/calendar.selectors';
import { TaskColumnCard } from 'components/ChoosedDay/TaskColumnCard/TaskColumnCard';
import { LoaderPrivatePage } from 'components/Loader/Loader';

import { TasksList } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ status }) => {
  const isLoading = useSelector(selectIsLoading);
  const tasks = useSelector(selectTasks);
  const indexCurrentDay = useSelector(selectIndexCurrentDay);

  const dayTasks = tasks[indexCurrentDay];

  let filteredDayTasks;
  if (dayTasks?.length > 0) {
    filteredDayTasks = dayTasks.filter(task => task.status === status.name);
  }

  return (
    <>
      <TasksList>
        {isLoading && <LoaderPrivatePage />}
        {filteredDayTasks &&
          filteredDayTasks.map(task => (
            <li key={task._id}>
              <TaskColumnCard {...task} />
            </li>
          ))}
      </TasksList>
    </>
  );
};
ColumnsTasksList.propTypes = {
  status: PropTypes.object.isRequired,
};
