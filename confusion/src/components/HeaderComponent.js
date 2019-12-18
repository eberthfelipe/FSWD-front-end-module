import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toogleNav = this.toogleNav.bind(this);
        this.toogleModal = this.toogleModal.bind(this);
      }

    render(){
        return(
            /* React.Fragment */
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toogleNav} />
                        <NavbarBrand className="mr-auto " href="/">
                            <img src="assets/images/logo.png" 
                                height="30" width="41" alt="Ristorante Con Fusion"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen}  navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus" >
                                        <span className="fa fa-info fa-lg"/> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu" >
                                        <span className="fa fa-list fa-lg" /> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus" >
                                        <span className="fa fa-address-card fa-lg" /> Contact US
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toogleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>Login
                                    </Button>
                                </NavItem>
                            </Nav> 
                        </Collapse>
                    </div>  
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creation will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toogleModal}>
                    <ModalHeader toggle={this.toogleModal}>Login</ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </Modal>
            </>
        );
    }

    toogleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toogleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
}

export default Header;