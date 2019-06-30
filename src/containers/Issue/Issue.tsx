import React from 'react';
import { IssueWrap, IssueStatus, IssueTitle } from './Issue.styled';
import * as T from './Issue.type';
import { issueMockData } from './Issue.mock';
import Status from 'components/Status/Status';
import Title from 'components/Title/Title';

class Issue extends React.Component {
  constructor(props: T.IssueData) {
    super(props);
  }

  render() {
    const issueInformation: T.IssueData = issueMockData;

    return (
      <IssueWrap>
        <IssueStatus>
          <Status status={issueInformation.status} />
        </IssueStatus>
        <IssueTitle>
          <Title
            name={issueInformation.name}
            creator={issueInformation.creator}
            tags={issueInformation.tags}/>
        </IssueTitle>
      </IssueWrap>
    )
  }
}

export default Issue;