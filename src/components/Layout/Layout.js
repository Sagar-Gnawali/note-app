import { makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import moment from 'moment';
import Avatar from '@material-ui/core/Avatar'; 
const drawerWidth = 240;
const myStyles = makeStyles((theme) => ({
    page: {
        background: "#f9f9f9",
        width: '100%',
        padding: theme.spacing(2)
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'wheat'
    },
    root: {
        display: 'flex'
    },
    active: {
        background: '#f4f4f4'

    },
    title: {
        padding: theme.spacing(2)
    },
    appbar:{
        width:`calc(100% - ${drawerWidth}px)`,
        background:'#f4f4f4',
        color:'black'
    },
    toolbar:theme.mixins.toolbar,
    date:{
        flexGrow:1
    },
    avatar:{
        marginLeft:theme.spacing(2)
    }
}));

const Layout = ({ children }) => {
    const classes = myStyles();
    const history = useHistory();
    const location = useLocation();
    const menuItem = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="primary" />,
            path: '/'
        },
        {
            text: 'Create New Notes',
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: '/create'
        }
    ]
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography variant="h5" className={classes.date}>
                        {
                            moment().format("MMM Do YY")
                        }
                    </Typography>
                    <Typography variant="body2">
                        Make your note
                    </Typography>
                    <Avatar src='/avatar.png' className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Menu
                    </Typography>
                </div>
                {/* List links here  */}
                <List>
                    {
                        menuItem.map(item => (
                            <ListItem key={item.text}
                                button
                                className={location.pathname === item.path ? classes.active : null}
                                onClick={() => history.push(item.path)}
                            >
                                <ListItemIcon >{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            {/* App bar here  */}
            {/* Side drawer */}
            <div className={classes.page}>
                <div className={classes.toolbar }></div>
                {children}
            </div>
        </div>
    )
}
export default Layout;
