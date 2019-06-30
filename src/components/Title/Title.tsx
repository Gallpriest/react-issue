import React from 'react';
import * as T from './Title.type';
import { TitleName, TitleTags } from './Title.styled';
import Tag from 'components/Tag/Tag';

function Title(props: T.Title) {
  const { name, tags, creator } = props;
  const tagList = tags.map(item => <Tag key={item.id} id={item.id} name={item.name} />)
  return (
      <TitleName>
        { name }
        <TitleTags>
        { tagList }
        </TitleTags>
      </TitleName>
  )
}

export default Title;