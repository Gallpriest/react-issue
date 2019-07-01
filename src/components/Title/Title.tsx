import React from 'react';
import * as T from './Title.type';
import { TitleName, TitleFlexbox, TitleCreator } from './Title.styled';
import Tag from 'components/Tag/Tag';

function Title(props: T.Title) {
  const { name, tags, creator } = props;
  const tagList = tags.map(item => <Tag key={item.id} id={item.id} name={item.name} />);
  const titleStyles = { paddingBottom: 'var(--size-small)', paddingRight: 'var(--size-small)' };
  return (
      <TitleName>
        <TitleFlexbox>
          <span style={titleStyles}>{ name }</span>
          <TitleFlexbox> { tagList } </TitleFlexbox>
        </TitleFlexbox>
        <TitleCreator>#7255 opened 4 days ago by {creator}</TitleCreator>
      </TitleName>
  )
}

export default Title;