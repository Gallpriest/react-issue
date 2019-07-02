import React from 'react';
import * as T from './AvatarGroup.type';
import { AvatarSet, AvatarReduced } from './AvatarGroup.styled';
import Avatar from 'components/Avatar/Avatar';

function getReducedAvatars(arr: T.Person[]) {
  return arr.slice(0,3).map(item => <Avatar key={item.id} person={item.person}/>)
}

function AvatarGroup(props: T.AvatarGroup) {
  const { participants } = props;
  let avatars;
  let avatarsCounter = 0;

  if (participants.length > 3) {
    avatarsCounter = participants.length - 3;
    avatars = <AvatarReduced> { getReducedAvatars(participants) } <span>+{avatarsCounter}</span> </AvatarReduced>
  } else {
    avatars = participants.map(item => <Avatar key={item.id} person={item.person}/>)
  }
  return (
    <AvatarSet>
      {avatars}
    </AvatarSet>
  )
}
export default AvatarGroup;