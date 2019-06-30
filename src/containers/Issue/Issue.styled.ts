import styled from 'styled-components';

export const IssueWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: var(--size-medium);
`;

export const IssueStatus = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  margin-right: var(--size-big);
`;

export const IssueTitle = styled.div`
  flex-grow: 1;
  height: 100%;
`;