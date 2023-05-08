import PropTypes from 'prop-types';

import { Button, AddTask, Plus } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ handleShowModal }) => {
  return (
    <>
      <Button type="button" onClick={handleShowModal}>
        <Plus>+</Plus>
        <AddTask>Add task</AddTask>
      </Button>
    </>
  );
};
AddTaskBtn.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};
