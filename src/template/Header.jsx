import React from 'react'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><i className='fa fa-comments'></i></span>
            <span className='logo-lg'>
                <i className='fa fa-comments'></i>
                <b> CommentApp </b>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'> </a>
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li className="messages-menu">

                        {props.isLoggedIn &&
                            <a href='/#/' onClick={() => props.auth.signOut()} className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-facebook-official"></i> <span> Deslogar</span>
                            </a>
                        }
                    </li>
                </ul>
            </div>
        </nav>

    </header>
)

