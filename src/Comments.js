import React, { Component }  from 'react'

class Comments extends Component {
  render() {
    return (
      <div >
          Renderizar comentario aqui.
          {JSON.stringify(this.props.comments)}
      </div>
    );
  }
}

export default Comments