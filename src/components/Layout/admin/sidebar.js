import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const sidebar = ({Menu}) => {
    return (
        <>
            <NewSidebar className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">                
                <Link to={'/'} className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <NewTitle className="sidebar-brand-text mx-3">Chido Tacos!</NewTitle>
                </Link>
                <hr className="sidebar-divider my-0" />               
                
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

            </NewSidebar>
        </>
    )
}

export default sidebar

const NewTitle = styled.div`
color: #541E35 !important;
font-family: 'Lobster', cursive;
letter-spacing: 1px;
font-size: 20px;
`

const NewSidebar = styled.ul`
background-color: #FFB43E !important;
`

const ItemMenu = styled.div`
.nav-link{
    :hover{
    color: #eee !important;
    background-color: #DF5D2E !important;
}
    padding: 0.3rem 1rem !important;
    display: flex !important;
    align-items: center;
    color: #541E35 !important
}`

const Icon = styled.div`
margin: 0 7px;
`