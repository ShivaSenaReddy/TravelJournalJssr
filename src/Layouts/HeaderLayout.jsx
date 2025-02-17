import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './HeaderLayout.css'
function HeaderLayout() {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/places'>Places</NavLink>
                <NavLink to='/Blog'>Blog</NavLink>
                <NavLink to='/'>Itenary</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HeaderLayout
