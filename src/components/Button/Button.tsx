import React from 'react';
import * as T from './Button.type';

function Button(props: T.Props) {
  const { text, type } = props;
  return (
   <button type={ type || 'button' }>
     { text }
   </button>
  )
}
export default Button;