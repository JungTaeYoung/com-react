import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { Hidden, Divider } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        width: 'auto'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
})



class AppShell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileOpen: false
        }
    }
    handleDrawerToggle = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        })
    }

    render() {

        const { window } = this.props;
        const container = window !== undefined ? () => window().document.body : undefined;
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button key={'HOME'} component={RouterLink} to="/">
                        <ListItemIcon>
                            <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'HOME'} />
                    </ListItem>
                    <ListItem button key={'설문지 권유'} component={RouterLink} to="/userchoice">
                        <ListItemIcon>
                            <MailOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={'설문지 권유'} />
                    </ListItem>
                    <ListItem button key={'설문지 제출'} component={RouterLink} to="/evaluation">
                        <ListItemIcon>
                            <CheckCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary={'설문지 제출'} />
                    </ListItem>
                </List>
            </div>
        )
        return (
            <div>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={this.handleDrawerToggle}
                                className={classes.menuButton}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                MirimMediaLab
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <nav className={classes.drawer} aria-label="mailbox folders">
                        <Hidden smUp implementation="css">
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={'left'}
                                open={this.state.mobileOpen}
                                onClose={this.handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper
                                }}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>
                    {/* <Drawer
                        variant="permanent"
                        className={classes.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />
                        <MenuItem>
                            <Link component={RouterLink} to="/">
                                HOME</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link component={RouterLink} to="/userchoice">
                                설문지 권유</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link component={RouterLink} to="/evaluation">
                                설문지 제출</Link>
                        </MenuItem>
                    </Drawer> */}
                    <main id="content" className={classes.content}>
                        <div className={classes.toolbar} />
                        {React.cloneElement(this.props.children)}
                    </main>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AppShell)