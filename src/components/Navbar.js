import {Link, NavLink} from "react-router-dom";
import { Container, Navbar, Nav, Button, NavbarBrand} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Header() {
    
    // console.log(user.username);
    return (
        <div className="header">
            <Container fluid="md">
                <Navbar collapseOnSelect expand="lg">
                    <NavbarBrand className="nav-icon-image">
                        {/* <img src="https://i.imgur.com/MvCZOX5.png" alt="logo"/> */}
                    </NavbarBrand>
                    
                    <h2 className="nac-headline"><i>Algorithms Visualizer</i></h2>
                    <NavbarToggle aria-controls="responsive-navbar-nav"></NavbarToggle>
                    <NavbarCollapse className="nav-options">
                        <Nav className="ml-auto">
                            <div></div>
                            
                            
                        </Nav>
                    </NavbarCollapse>
                </Navbar>
            </Container>
        </div>
    );
}

export default Header;