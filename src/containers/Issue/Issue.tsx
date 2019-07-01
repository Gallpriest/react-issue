import React from 'react';
import { IssueWrap, IssueStatus, IssueTitle, IssueAvatars } from './Issue.styled';
import * as T from './Issue.type';
import { issueMockData } from './Issue.mock';
import Status from 'components/Status/Status';
import Title from 'components/Title/Title';
import AvatarGroup from 'components/AvatarGroup/AvatarGroup';

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
        <IssueAvatars>
          <AvatarGroup participants={issueInformation.participants}/>
        </IssueAvatars>
      </IssueWrap>
    )
  }
}

export default Issue;