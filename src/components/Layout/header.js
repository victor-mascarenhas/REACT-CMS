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
                <GiTacos/>CHIDO TACOS!
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
background-color: #111;
`