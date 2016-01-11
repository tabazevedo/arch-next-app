import React from 'react';
import style from './style.css';

export default class Comment extends React.Component {
  static propTypes = {
    author: React.PropTypes.string,
    body: React.PropTypes.string
  }

  render() {
    return (
      <div className={style.comment}>
        <h5 className={style.author}>{this.props.author}</h5>
        <p className={style.body}>{this.props.body}</p>
      </div>
    );
  }
}
