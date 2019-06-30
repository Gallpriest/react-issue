import React from 'react';
import * as T from './Status.type';
import { StatusIcon } from './Status.styled';
import Icon from 'components/Icon/Icon';

function Status(props: T.Status) {
  const { status } = props;
  const statusURL = status === 'warning' ? 'src/assets/warning.svg' : 'src/assets/success.svg'
  return (
    <StatusIcon>
      <Icon
        size="default"
        imgURL={statusURL} />
    </StatusIcon>
  )
}

export default Status;