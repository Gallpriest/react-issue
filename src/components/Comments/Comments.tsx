import React from 'react';
import { CommentsLink } from './Comments.styled';
import * as T from './Comments.type';
import Icon from 'components/Icon/Icon';

function Comments(props: T.Comments) {
  const commentsNumber = props.comments.length;
  return (
    <CommentsLink>
      <Icon size="small" imgURL="src/assets/comment.svg"  />
      <span>{ commentsNumber }</span>
    </CommentsLink>
  )
}

export default Comments;