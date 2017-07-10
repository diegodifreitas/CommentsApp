import React from 'react'

const Menu = props =>
    <aside className='main-sidebar'>
        <section className='sidebar'>
            < ul className='sidebar-menu' >
                {props.isLoggedIn &&
                    <div>
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src={props.user.photoURL} className="img-circle" alt={props.user.displayName} />
                            </div>
                            <div className="pull-left info">
                                <p>{props.user.displayName}</p>
                                <i className="fa fa-circle text-success"></i> Online
                            </div>
                        </div>
                    </div>
                }
            </ul >
        </section>
    </aside>

export default Menu