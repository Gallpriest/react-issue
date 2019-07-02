import styled from 'styled-components';

export const CommentsLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding-top: var(--size-small);
  transition: all 0.2s ease-in-out;

  :hover {
    text-decoration: none;
  }

  :hover > span,
  :hover > svg {
    color: #2c3e50;
  }

  > span {
    font-weight: bold;
    font-size: 14px;
    color: #7f8c8d;
    padding-left: var(--size-small);
  }

  > svg {
    width: 16px;
    height: 16px;
  }
`;