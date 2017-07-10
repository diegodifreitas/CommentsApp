import React, { Component } from 'react'

import '../common/dependencies'

import Comments from '../comment/Comments'
import NewComment from '../comment/NewComment'
import Header from '../template/Header'
import Menu from '../template/Menu'
import Footer from '../template/Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user })
      } else {
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
  }
  postNewComment(comment) {
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName,
      photo: this.state.user.photoURL

    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment
    this.setState({
      comments: comments
    })
  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div>
        <div className='wrapper'>
          <Header auth={this.props.auth} isLoggedIn={this.state.isLoggedIn} />
          <Menu user={this.state.user} isLoggedIn={this.state.isLoggedIn} />
          <div className='content-wrapper'>
            <div className="box direct-chat">
              <div className="box-header">
                <h3 className="box-title">Direct Chat</h3>
              </div>
              <Comments comments={this.state.comments} />
              {this.state.isLoggedIn &&
                <NewComment postNewComment={this.postNewComment} />
              }
              {!this.state.isLoggedIn &&
                <div className="callout callout-warnning">
                  <h4>Conecte-se!</h4>
                  <p>Entre com a sua conta do facebook para comentar</p>
                  <button className='btn btn-default' onClick={() => this.auth('facebook')}> Conectar </button>
                </div>
              }
            </div>
          </div>
        </div >
        <Footer />
      </div>
    )
  }
}

export default App