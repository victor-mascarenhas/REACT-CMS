import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Container} from 'react-bootstrap'
import {GiTacos} from 'react-icons/gi'

export default () => {
    
    const menu = [
        {
            title: "Home",
            link: "",
            icon: ""
        },
        {
            title: "Sobre",
            link: "",
            icon: ""
        },
        {
            title: "Produtos",
            link: "",
            icon: ""
        },
        {
            title: "Serviços",
            link: "",
            icon: ""
        },
        {
            title: "Contatos",
            link: "",
            icon: ""
        }
    ]


    return (
        <Header>
            <Container>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home">
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
                            <Nav.Link key={i} href="#home">{item.title}</Nav.Link>   
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

.nav-link:hover{
    color: red !important;
    font-weight: 500;
}
`
const Logo = styled.div`
font-size: 20px;
font-weight: 600;
margin: 0;
font-family: 'Josefin Sans', sans-serif;

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