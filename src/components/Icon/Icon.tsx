import React from 'react';
import { IconImage } from './Icon.styled';
import * as T from './Icon.type';

function Icon(props: T.Icon) {
  const { imgURL, size, theme } = props;
  return (
    <IconImage theme={theme} src={imgURL}/>
  )
}

export default Icon;