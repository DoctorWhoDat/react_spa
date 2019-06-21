import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Plus from '@material-ui/icons/MoreHoriz';

import NewList from './components/newList';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default function TestHook(props) {
    const [count, setCount] = useState(props.init);
    const [i, setI] = useState(Math.floor(Math.random() * count));
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        document.title = count;
        setI(Math.floor(Math.random() * count + 1));
    });

    function handleMenuClick(event) { setAnchorEl(event.currentTarget); };
    function handleMenuClose() { setAnchorEl(null); }
    return (
        <div>
            {count}
            <Button color='primary' variant='contained' onClick={() => {
                setCount(0);
            }}>
                Reset
            </Button>
            <br />
            <Button style={{ margin: '20px' }} color='primary' variant='contained'
                onClick={() => setCount(prevCount => prevCount + 1)}
            >+</Button>
            <Button variant='contained'
                onClick={() => setCount(prevCount => prevCount - 1)}
            >-</Button>

            <Button aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true"
                style={{ textTransform: 'none', textAlign: 'center', marginTop: '15px', marginLeft: '20px' }}
                onClick={handleMenuClick} variant='outlined'>
                {/* <ListItemText primary="Open Menu" /> */}
                <Plus />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{ onClick: handleMenuClose }}
            >
                <MenuItem component={RouterLink} to='/TestHook'>Test</MenuItem>
                <MenuItem component={RouterLink} to='/'>Home</MenuItem>
                <MenuItem component={RouterLink} to='/Contact'>Contact</MenuItem>
            </Menu>
            <NewList />
        </div >
    );
}