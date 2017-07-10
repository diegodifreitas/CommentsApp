import React, { Component } from 'react'

import Comment from './Comment'

class Comments extends Component {
  renderComment(key, comment) {
    return (
      <Comment key={key} comment={comment} />    )
  }
  render() {
    return (
        <div className="box-body" >
          <div className="box box-warning direct-chat direct-chat-warning">
            <div className="direct-chat-messages">
              {Object.keys(this.props.comments).map(
                key => this.renderComment(key, this.props.comments[key])
              )}
            </div>
          </div>
        </div >
    )
  }
}

export default Comments