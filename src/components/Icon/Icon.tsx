import React from 'react';
import { IconImage } from './Icon.styled';
import * as T from './Icon.type';

function Icon(props: T.Icon) {
  const { imgURL, size, theme } = props;
  const iconWidth = size === 'small' ? '20px' : '30px';
  return (
    <IconImage width={iconWidth} src={imgURL}/>
  )
}

export default Icon;