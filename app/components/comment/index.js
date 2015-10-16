import React from 'react';

export default class Comment extends React.Component {
  static propTypes = {
    author: React.PropTypes.string,
    body: React.PropTypes.string
  }

  render() {
    return (
      <div className="Comment">
        <h5 className="Comment__author">{this.props.author}</h5>
        <p className="Comment__body">{this.props.body}</p>
      </div>
    );
  }
}
