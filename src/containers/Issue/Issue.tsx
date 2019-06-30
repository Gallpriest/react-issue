import React from 'react';
import { IssueWrap, IssueStatus } from './Issue.styled';
import Status from '../../components/Status/Status';

class Issue extends React.Component {
  render() {
    return (
      <IssueWrap>
        <IssueStatus>
          <Status status="warning" />
        </IssueStatus>
      </IssueWrap>
    )
  }
}

export default Issue;