import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import MailIcon from '@material-ui/icons/Mail';
import AppsIcon from '@material-ui/icons/Apps';

import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export default function BottomNav(props) {
    const [bottomValue, setBottomValue] = useState(0);

    return (
        <AppBar position='fixed' style={{bottom: 0, top: 'auto'}}>
            <BottomNavigation
                value={bottomValue}
                style={{ border: 'solid 1px', bottom: 0 }}
                showLabels
                onChange={(e, v) => { setBottomValue(v) }}
            >
                <BottomNavigationAction label="Home" icon={<MailIcon />}
                    component={RouterLink} to='/'
                />
                <BottomNavigationAction label="Stuff" icon={<AppsIcon />}
                    component={RouterLink} to='/Stuff' />
            </BottomNavigation>
        </AppBar>
    );
};
