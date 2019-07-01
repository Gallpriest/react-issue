import React from 'react';
import * as T from './AvatarGroup.type';
import { AvatarSet } from './AvatarGroup.styled';
import Avatar from 'components/Avatar/Avatar';

function AvatarGroup(props: T.AvatarGroup) {
  const { participants } = props;
  const avatars = participants.map(item => <Avatar key={item.person} person={item.person}/>)
  return (
    <AvatarSet>
      {avatars}
    </AvatarSet>
  )
}
export default AvatarGroup;