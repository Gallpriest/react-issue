import React from 'react';
import Issue from '../Issue/Issue';
import styles from './Wrap';

class Wrap extends React.Component {
  render() {
    return (
      <div className={styles.wrap}>
        <Issue />
      </div>
    )
  }
}

export default Wrap;