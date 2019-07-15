import React from 'react';
import { IconImage } from './Icon.styled';
import * as T from './Icon.type';

function Icon(props: T.Icon) {
  const { imgURL } = props;
  return (
    <IconImage src={imgURL}/>
  )
}

export default Icon;