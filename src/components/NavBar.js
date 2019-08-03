import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, FormControl, Button, NavDropdown, Form, Nav } from 'react-bootstrap'




export default function  NavBar() {

    return(

            // <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            //     <div className="container">
            //         <a className="navbar-brand" href="index.html">
            //             Project Task Tool
            //         </a>
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            //             <span className="navbar-toggler-icon" />
            //         </button>
            //     </div>
            // </nav>

                // <nav className="navbar">
                //     <div className="container">
                //         <a className="active" href="index.html">
                //             Home
                //         </a>
                //         <a href="index.html">About</a>
                //         <a href="index.html">Contact</a>
                //         <input type="text" placeholder="Search.." />
                //     </div>
                // </nav>
            

        <div>
           <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Hellox</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="btn-navbar" variant="outline-success">Search</Button>
                </Form>
             </Navbar.Collapse>
            </Navbar>
        </div>
    
    )
    
}

