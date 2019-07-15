import React from 'react';
import * as S from './Issue.styled';
import * as T from './Issue.type';
import Status from 'components/Status/Status';
import Title from 'components/Title/Title';
import AvatarGroup from 'components/AvatarGroup/AvatarGroup';
import Comments from 'components/Comments/Comments';
import { Provider } from 'react-redux';
import store from '../../redux/store';

class Issue extends React.Component {
  readonly state = { githubIssues: [] };

  componentDidMount() {
    const url = 'https://api.github.com/repos/facebook/react/issues?state=closed&page=3';
    fetch(url)
      .then(responce => responce.json())
      .then(data => {
        const sortedData = data.slice(0,10)
                               .map((issue: any) => ({ assignees: issue.assignees,
                                                       title: issue.title,
                                                       state: issue.state,
                                                       comments: issue.comments,
                                                       number: issue.number,
                                                       labels: issue.labels,
                                                       creator: issue.user.login }))
        this.setState({ githubIssues: sortedData });
      });
  }

  render() {
    const ISSUE_DATA: T.IssueData[] = this.state.githubIssues;
    const ISSUES = ISSUE_DATA.map((item: T.IssueData) =>
      <S.IssueWrap key={item.title}>
        <S.IssueStatus>
          <Status
            status={item.state} />
        </S.IssueStatus>
        <S.IssueTitle>
          <Title
            number={item.number}
            title={item.title}
            creator={item.creator}
            labels={item.labels}/>
        </S.IssueTitle>
        <S.IssueAvatars>
          <AvatarGroup
            assignees={item.assignees}/>
        </S.IssueAvatars>
        <S.IssueComments>
          <Comments
            comments={item.comments} />
        </S.IssueComments>
      </S.IssueWrap>);

    return (
      <Provider store={store}>
        { ISSUES }
      </Provider>
    )
  }
}

export default Issue;