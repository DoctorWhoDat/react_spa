import React, { Component, useState } from "react"
import { Route, BrowserRouter, Link as RouterLink, Switch } from "react-router-dom";
// import { Navbar, Nav, NavItem } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
// import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import TestHook from "./TestHook";

import y from "./data/weekly";
import BottomNav from './components/BottomNav';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Plus from '@material-ui/icons/MoreHoriz';

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
            mobileOpen: false,
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            anchorEl: null
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    };
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
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

    handleMenuClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleMenuClose = () => { this.setState({ anchorEl: null }) };

    drawer(variant, anchor) {
        const { anchorEl } = this.state;
        return (<Drawer
            // className="test"
            variant={variant}
            anchor={anchor}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
        >
            <List style={{ minWidth: '150px' }}>
                {['Home', 'Stuff', 'Contact'].map((text, index) => (
                    <ListItem button component={RouterLink} to={text !== 'Home' ? '/' + text : '/'} >
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        {/* {text === 'Home' ? <NavLink exact to='/'><ListItemText primary={text} /></NavLink> : <NavLink to={'/' + text}><ListItemText primary={text} /></NavLink>} */}

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <Divider />
                <Button aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true"
                    component={RouterLink} style={{ textTransform: 'none', textAlign: 'center', width: '100%', marginTop: '15px' }}
                    onClick={this.handleMenuClick}>
                    {/* <ListItemText primary="Open Menu" /> */}
                    <Plus />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleMenuClose}
                    MenuListProps={{ onClick: this.handleMenuClose }}
                >
                    <MenuItem component={RouterLink} to='/TestHook'>Test</MenuItem>
                    <MenuItem component={RouterLink} to='/'>Home</MenuItem>
                    <MenuItem component={RouterLink} to='/Contact'>Contact</MenuItem>
                </Menu>
            </List>
            {/* <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> 
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List> */}
        </Drawer>)
    }
    // componentWillMount() {
    //     const mediaQuery = window.matchMedia('(max-width: 768px)');
    //     if(mediaQuery.matches){
    //         this.setState({mobileOpen: false});
    //     }
    // }
    render() {
        return (
            <BrowserRouter>
                <div >
                    <AppBar position="fixed" >
                        <Toolbar className='tes'>
                            <Hidden mdUp>
                                <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerToggle}>
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <span>Welcome to React SPA!</span>
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        {this.drawer('temporary', 'bottom')}
                    </Hidden>
                    <Hidden smDown>
                        {this.drawer('permanent', 'left')}
                    </Hidden>
                    {/* <Navbar color="orange" dark expand="md" scrolling fixed="top">
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
                    </Navbar> */}
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
                        <Switch>
                            <Route exact path="/" render={(props) => <Home title='Home' />} />
                            <Route path="/stuff" component={Stuff} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/TestHook" render={(props) => <TestHook init={10} />} />
                            <Route>
                                Oops!! Bad path
                            </Route>
                        </Switch>
                    </div>
                    {/* <div className="footer">Footer goes here</div> */}
                    <Hidden mdUp>
                        <BottomNav />
                    </Hidden>
                </div>
            </BrowserRouter>
        )
    }
}
window.onresize = Main.handleDrawerToggle;
export default Main;