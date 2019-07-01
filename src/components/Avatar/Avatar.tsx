import React from 'react';
import Icon from 'components/Icon/Icon';
import * as T from './Avatar.type';

function Avatar(props: T.Avatar) {
  const { person } = props;
  return (
    <div>
      <Icon imgURL={person} />
    </div>
  )
}

export default Avatar;