import React from 'react';
import * as T from './AvatarGroup.type';
import { AvatarSet, AvatarReduced } from './AvatarGroup.styled';
import Avatar from 'components/Avatar/Avatar';

function getReducedAvatars(arr: T.Person[]) {
  return arr.slice(0,3).map(item => <Avatar key={item.id} assignee={item.person}/>)
}

function AvatarGroup(props: T.AvatarGroup) {
  const { assignees } = props;
  console.log(assignees)
  let avatars;
  let avatarsCounter = 0;

  if (assignees.length > 3) {
    avatarsCounter = assignees.length - 3;
    avatars = <AvatarReduced> { getReducedAvatars(assignees) } <span>+{avatarsCounter}</span> </AvatarReduced>
  } else {
    avatars = assignees.map((item: any) => <Avatar key={item.id} assignee={item.avatar_url}/>)
  }
  return (
    <AvatarSet>
      {avatars}
    </AvatarSet>
  )
}
export default AvatarGroup;