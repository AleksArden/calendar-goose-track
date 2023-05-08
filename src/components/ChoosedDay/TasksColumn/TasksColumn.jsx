import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { TaskModal } from '../../TaskModal/TaskModal';

import { Container } from './TasksColumn.styled';

export const TasksColumn = ({ status }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <ColumnHeadBar title={status.name} handleShowModal={handleShowModal} />
        <ColumnsTasksList status={status} />
        <AddTaskBtn handleShowModal={handleShowModal} />
      </Container>
      {showModal &&
        ReactDOM.createPortal(
          <TaskModal
            handleCloseModal={handleCloseModal}
            status={status.name}
          />,
          document.querySelector('#modal-root')
        )}
    </>
  );
};
TasksColumn.propTypes = {
  status: PropTypes.object.isRequired,
}