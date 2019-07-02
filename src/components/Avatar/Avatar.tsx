import React from 'react';
import Icon from 'components/Icon/Icon';
import * as T from './Avatar.type';
import { AvatarImage } from './Avatar.styled';

function Avatar(props: T.Avatar) {
  const { person } = props;
  return (
    <AvatarImage src={person} />
  )
}

export default Avatar;