import React from 'react';

/* Components */

import Post from '../../components/post';

export default class ViewPostRoute extends React.Component {
  render() {
    let comments = [
      { author: 'Steve',
        body: 'Hello, great post!' }
    ];

    return (
      <Post
        author="Dan"
        title="How to Reactify everything"
        body="Lorem Ipsum"
        comments={comments} />
    );
  }
}
