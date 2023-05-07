import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  text-decoration-line: underline;
  color: var(--accent-text-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  transition: color var(--animation);

  &:hover,
  :focus {
    color: var(--hover-btn-background-color);
  }

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
