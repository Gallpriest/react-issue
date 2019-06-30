import React from 'react';
import * as T from './Tag.type';
import { TagBlock } from './Tag.styled';

function Tag(props: T.Tag) {
  const { id, name } = props;
  return (
    <TagBlock id={id}>
      { name }
    </TagBlock>
  )
}

export default Tag;