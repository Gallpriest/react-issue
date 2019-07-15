import styled from 'styled-components';

export const AvatarSet = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
`;

export const AvatarReduced = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  color: rgba(0, 0, 0, .5);

  > span {
    padding-left: var(--size-small);
  }
`