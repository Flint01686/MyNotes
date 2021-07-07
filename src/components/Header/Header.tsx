import React, { FC } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header: FC = () => 
{
    return (
        <Navbar variant="dark" expand="lg" style={{backgroundColor: "#000"}}>
            <Navbar.Brand style={{marginLeft: "50px"}} href="/">MyNotes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header