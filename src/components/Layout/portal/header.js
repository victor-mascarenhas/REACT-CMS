import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Container} from 'react-bootstrap'
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
                        ¡CHIDO TACOS!            
                </Logo>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav >
                        {menu.map((item,i) => (
                            <NavLink exact ={true} to={item.link} key={i}>
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
background-color: #FFB43E;
font-family: 'Poppins', sans-serif;


.nav-link:hover{
    background-color: #541E35 !important;
    //font-weight: 800;
    text-decoration: none !important;
    //letter-spacing: 3px;
}
`
const Logo = styled.div`
font-family: 'Lobster', cursive;
letter-spacing: 1px;
//max-height:50px;
//max-width: 50px;
font-size: 38px;
color: #541E35;
//font-weight: 600;

//svg{
//    color: black;
//    margin: -5px;
//}

//span{
//    color: red;
//    margin: 0;
//    font-size: 20px;
//    text-transform: uppercase;
//    display: block;
//    text-align: center;
//    letter-spacing: 4px;
//}



`