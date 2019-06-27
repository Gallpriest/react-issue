import React from 'react';
import styles from './Issue';

class Issue extends React.Component {
  render() {
    return (
      <div className={styles.issue}>
        <div className={styles.issue__status}>
          Test
        </div>
      </div>
    )
  }
}

export default Issue;