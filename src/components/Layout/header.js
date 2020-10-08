import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Container} from 'react-bootstrap'
import {GiTacos} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

export default () => {
    
    const menu = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Sobre",
            link: "sobre"
        },
        {
            title: "Produtos",
            link: "produtos"
        },
        {
            title: "Serviços",
            link: "servicos"
        },
        {
            title: "Contatos",
            link: "contato"
        }
    ]


    return (
        <Header>
            <Container>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <Logo>
                <GiTacos/> CHIDO 
                <br />
                <span>TACOS!</span>
                </Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav >
                        {menu.map((item,i) => (
                            <NavLink to={item.link} key={i}>
                            <Nav.Link as="div">{item.title}</Nav.Link>
                            </NavLink>   
                        ))}
                                             
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            </Container>
        </Header>
    )
}



const Header = styled.div`
background-color: #f3ba15;
font-family: 'Poppins', sans-serif;

.nav-link:hover{
    color: red !important;
    font-weight: 500;
    text-decoration: none !important;
}
`
const Logo = styled.div`
font-size: 20px;
font-weight: 600;
margin: 0;

svg{
    color: black;
    margin: -5px;
}

span{
    color: red;
    margin: 0;
    font-size: 20px;
    text-transform: uppercase;
    display: block;
    text-align: center;
    letter-spacing: 4px;
}



`