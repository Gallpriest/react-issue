import React from 'react';
import * as T from './Tag.type';
import { TagBlock } from './Tag.styled';

const theme = { backgroundColor: '', color: '' };

const setTagBackground = (tagName: string) => {
  switch(tagName) {
    case 'js':
      theme.backgroundColor = 'yellow';
      theme.color = 'black';
      break;
    case 'ts':
      theme.backgroundColor = '#341f97';
      theme.color = 'white';
      break;
    case 'css':
    case 'scss':
      theme.backgroundColor = '#0984e3';
      theme.color = 'white';
      break;
    case 'confirmed':
      theme.backgroundColor = '#b71540';
      theme.color = 'white';
      break;
    default:
      theme.backgroundColor = '#fa983a';
      theme.color = 'white';
  };

  return theme;
};

function Tag(props: T.Tag) {
  const { id, name } = props;
  const { backgroundColor, color } = setTagBackground(name);
  return (
    <TagBlock theme={{ backgroundColor, color }} id={id}>
      { name }
    </TagBlock>
  )
}

export default Tag;