import React from 'react';
import styles from './style.css';

/* Components */

import Post from '../../../components/post';

export default class ViewPostRoute extends React.Component {
  render() {
    const {author, title, body, comments} = this.props.state;
    return (
      <div className={styles.container}>
        <Post
          author={author}
          title={title}
          body={body}
          comments={comments} />
      </div>
    );
  }
}
