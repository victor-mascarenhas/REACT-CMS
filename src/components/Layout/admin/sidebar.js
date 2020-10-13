import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const sidebar = ({Menu}) => {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Chido Tacos!</div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span></a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                
                {Menu.map((item,i) => (
                    <ItemMenu key={i}>
                    <li className="nav-item">
                        <Link to={'/admin' + item.path}>
                            <div className="nav-link">
                                <Icon>{item.icon ? item.icon : ""}</Icon>
                                <span>{item.name}</span></div>
                        </Link>
                    </li>
                    </ItemMenu>
                ))}

            </ul>
        </>
    )
}

export default sidebar

const ItemMenu = styled.div`
.nav-link{
    padding: 0.3rem 1rem !important;
    display: flex !important;
    align-items: center;
}`

const Icon = styled.div`
margin: 0 7px;
`