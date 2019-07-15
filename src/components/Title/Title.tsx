import React from 'react';
import * as T from './Title.type';
import { TitleName, TitleFlexbox, TitleCreator } from './Title.styled';
import Tag from 'components/Tag/Tag';

function Title(props: T.Title) {
  const { title, labels, creator, number } = props;
  const tagList = labels.map((item: any) => <Tag key={item.id} id={item.id} name={item.name} />);
  const titleStyles = { paddingBottom: 'var(--size-small)', paddingRight: 'var(--size-small)' };
  return (
      <TitleName>
        <TitleFlexbox>
          <span style={titleStyles}>{ title }</span>
          <TitleFlexbox> { tagList } </TitleFlexbox>
        </TitleFlexbox>
        <TitleCreator>#{number} opened 4 days ago by {creator}</TitleCreator>
      </TitleName>
  )
}

export default Title;