import React, { Component } from "react"
import { Route, BrowserRouter } from "react-router-dom";
// import { Navbar, Nav, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

export function rand(min, max) {
    var x = max - min + 1;

    // for(var i = 1; i <= 10; i++) {
    //   arr.push(Math.floor(Math.random()*x + min));
    // }
    return Math.floor(Math.random() * x + min);
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <BrowserRouter>
                <div >
                    <Navbar color="orange" dark expand="md" scrolling fixed="top">
                        <NavbarBrand style={{ color: '#fff' }}>
                            <strong>Navbar</strong>
                        </NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                <NavItem>
                                    <NavLink exact to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/stuff">Features</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact">Pricing</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle nav caret>Galleries</DropdownToggle>
                                        <DropdownMenu>
                                            <LinkContainer to="/stuff"><DropdownItem>sdfsd</DropdownItem></LinkContainer>
                                            <DropdownItem><NavLink to="/contact">blaaah</NavLink></DropdownItem>
                                            <DropdownItem href="#">Something else here</DropdownItem>
                                            <DropdownItem href="#">Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                                sfsf
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                    {/* <Navbar fixedTop={true} inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                        Welcome to 
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>   
                            <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
                            <LinkContainer to="/stuff"><NavItem>Stuff</NavItem></LinkContainer>                        
                            <LinkContainer to="/contact"><NavItem>Truth</NavItem></LinkContainer>
                        {/* <NavDropdown eventKey={3} title="Games">
                            <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
                            <LinkContainer to="/stuff"><NavItem>Stuff</NavItem></LinkContainer>                        
                            <LinkContainer to="/contact"><NavItem>{rand(1,2000)}</NavItem></LinkContainer>
                        </NavDropdown> 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}


                    {/* <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">{rand(1,2000)}</NavLink></li>
                    </ul> */}

                    <div className='content'>
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                    {/* <div className="footer">Footer goes here</div> */}
                </div>
            </BrowserRouter>
        )
    }
}

export default Main;