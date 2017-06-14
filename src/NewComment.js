import React, { Component } from 'react'

class NewComment extends Component {
    constructor(props){
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event) {
        if (event.key === 'Enter') {
            this.props.postNewComment({
                comment: this.refs.comment.value
            })
            this.refs.comment.value = ''
            event.preventDefault()
        }
    }
    render() {
        return (
            <div className='row'>
                <textarea
                    ref='comment'
                    className='form-control'
                    placeholder='Comente!'
                    onKeyDown={this.handleEnter} />
            </div>
        )
    }
}

export default NewComment
