import React from 'react'

const Comment = props =>
    <div className="direct-chat-msg">
        <div className="direct-chat-info clearfix">
            <span className="direct-chat-name pull-left"> {props.comment.user.name} </span>
        </div>
        <img className="direct-chat-img" src={props.comment.user.photo} alt={props.comment.user.name} />

        <div className="direct-chat-text">
            {props.comment.comment}
        </div>
    </div>

export default Comment