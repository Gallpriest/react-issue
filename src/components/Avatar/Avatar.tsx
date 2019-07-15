import React from 'react';
import Icon from 'components/Icon/Icon';
import * as T from './Avatar.type';
import { AvatarImage } from './Avatar.styled';

function Avatar(props: T.Avatar) {
  const { assignee } = props;
  return (
    <AvatarImage src={assignee} />
  )
}

export default Avatar;