import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



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

            /*    <nav className="navbar">
                    <div className="container">
                        <a className="active" href="index.html">
                            Home
                        </a>
                        <a href="index.html">About</a>
                        <a href="index.html">Contact</a>
                        <input type="text" placeholder="Search.." />
                    </div>
                </nav>
            */

           <Navbar bg="light" variant="light">
           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
           <Nav className="mr-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="#features">Features</Nav.Link>
             <Nav.Link href="#pricing">Pricing</Nav.Link>
           </Nav>
           <Form inline>
             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             <Button variant="outline-primary">Search</Button>
           </Form>
         </Navbar>
    
    )

}