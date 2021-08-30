import React from 'react'
import "../styles/Nav.css"

const Nav = () => {
    return (
        <div className="nav">
            <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/450px-Netflix_2014_logo.svg.png"
                alt="Netflix Logo"
            />
            <img 
                className="nav_avatar"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
