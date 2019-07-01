import styled from 'styled-components';

export const TagBlock = styled.div`
  display: inline-block;
  user-select: none;
  font-size: 12px;
  color:  ${props => props.theme.color};
  background: ${props => props.theme.backgroundColor};
  padding: var(--size-small);
  border-radius: 2px;
  margin-right: var(--size-small);
  margin-bottom: var(--size-small);
`;