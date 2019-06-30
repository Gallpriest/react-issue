import React from 'react';
import Issue from '../Issue/Issue';
import { Wrapper } from './Wrap.styled';

class Wrap extends React.Component {
  render() {
    return (
      <Wrapper>
        <Issue />
      </Wrapper>
    )
  }
}

export default Wrap;