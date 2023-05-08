import PropTypes from 'prop-types';
import Icons from 'images/sprite.svg';

import { Wrapper, Title, Button, Icon } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title, handleShowModal }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button type="button" onClick={handleShowModal}>
        <Icon>
          <use href={`${Icons}#profile-plus-s`}></use>
        </Icon>
      </Button>
    </Wrapper>
  );
};
ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};
