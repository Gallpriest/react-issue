import styled from 'styled-components';

export const IssueWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--size-medium) var(--size-medium) 0;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  margin-bottom: var(--size-medium);
`;

export const IssueStatus = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  margin-right: var(--size-medium);
`;

export const IssueTitle = styled.div`
  flex-grow: 1;
  height: 100%;
  max-width: 900px;
`;

export const IssueAvatars = styled.div`
  flex-grow: 1;
`;

export const IssueComments = styled.div`
  margin-left: var(--size-big);
`
