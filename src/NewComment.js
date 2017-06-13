import React, { Component } from 'react'

class NewComment extends Component {
    constructor(props){
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(event) {
        if (event.key === 'Enter') {
            this.props.postNewComment({
                comment: 'test'
            })
            event.preventDefault()
        }
    }
    render() {
        return (
            <div className='row'>
                <textarea
                    className='form-control'
                    placeholder='Comente!'
                    onKeyDown={this.handleEnter} />
            </div>
        );
    }
}

export default NewComment
