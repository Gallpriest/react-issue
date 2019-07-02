import styled from 'styled-components';

export const AvatarSet = styled.div`
  display: flex;
`;

export const AvatarReduced = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgba(0, 0, 0, .5);

  > span {
    padding-left: var(--size-small);
  }
`