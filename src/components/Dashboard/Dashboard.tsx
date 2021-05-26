import React, {useState} from 'react';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Divider,
    Button
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/core/Menu';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import {RouteComponentProps, withRouter, Switch, Route} from 'react-router-dom';


export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}