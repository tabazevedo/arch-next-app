import React from 'react';
import Comment from '../comment';
import style from './style.css';

export default class Post extends React.Component {
  static propTypes = {
    author: React.PropTypes.string,
    body: React.PropTypes.string,
    comments: React.PropTypes.array,
    title: React.PropTypes.string
  }

  static defaultProps = {
    comments: []
  }

  renderComments() {
    return this.props.comments.map((comment, i) => <Comment key={i} {...comment} />);
  }

  render() {
    return (
      <div className="Post">
        <h2 className={style.title}>{this.props.title}</h2>
        <h4 className={style.author}>{this.props.author}</h4>
        <p className={style.body}>{this.props.body}</p>
        <div className={style.comments}>{this.renderComments()}</div>
      </div>
    )
  }
}
