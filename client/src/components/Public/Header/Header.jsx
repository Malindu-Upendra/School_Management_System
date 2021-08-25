import {Divider, makeStyles} from '@material-ui/core'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridLeftSpacing: {
        margin: theme.spacing(3, 8)
    },
    gridRightSpacing: {
        margin: theme.spacing(3, 8)
    },
    headerLogo: {
        maxWidth: 200
    },
    userInput: {
        marginRight: theme.spacing(2),
        [`& fieldset`]: {
            borderRadius: 5,
        },
        [`& input`]: {
            paddingLeft: 50,
            backgroundImage: 'url(Assets/user.svg)',
            backgroundSize: '20px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '10px',
        }
    },
    userPassword: {
        marginRight: theme.spacing(2),
        [`& fieldset`]: {
            borderRadius: 5,
        },
        [`& input`]: {
            paddingLeft: 50,
            backgroundImage: 'url(Assets/privacy.svg)',
            backgroundSize: '20px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '10px',
        },
    },
    loginBtn: {
        background: '#006666',
        height: 40,
        borderRadius: 0,
        color: '#fff'
    },
    userLink: {
        marginTop: theme.spacing(1),
        textAlign: 'right',
    },
    menuContianer: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        background: '#334d4d',
        width: 'inherit',
        boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.4)"
    },
    menuBtn: {
        color: 'whitesmoke',
        minWidth: 100,
        height: 50,
    },
    loggedUser: {
        textAlign: 'right',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item className={classes.gridLeftSpacing}>
                    <img src="/Assets/H2MD.png" alt="" className={classes.headerLogo} />
                </Grid>
                <Grid item className={classes.gridRightSpacing}>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="filled-basic"
                            placeholder="User Name"
                            variant="outlined"
                            className={classes.userInput}
                            size="small"
                        />
                        <TextField
                            variant="outlined"
                            id="standard-password-input"
                            placeholder="Password"
                            type="password"
                            autoComplete="current-password"
                            className={classes.userPassword}
                            size="small"
                        />
                        <Button variant="contained" className={classes.loginBtn}><ChevronRightIcon /></Button>
                        <Typography className={classes.userLink}>
                            <Link style={{color:"#006666"}} href="#">
                                Forgotten your username or password ?
                            </Link>
                        </Typography>
                    </form>
                </Grid>
            </Grid>

            <Grid container className={classes.menuContianer} justifyContent="space-between">
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item className={classes.menuItem}>
                            <Button style={{background:"#006666"}} className={classes.menuBtn}>Home</Button>
                        </Grid>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn}>Events</Button>
                        </Grid>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn} aria-haspopup="true" onClick={handleClick}>
                                Subjects
                                <KeyboardArrowDownIcon />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    style={{background:"#006666",color:"white"}}
                                    onClick={()=> window.location.href="/teacher/subjectMaterial/MathematicsTeachersView"}
                                >
                                    Mathematics
                                </MenuItem>
                                <Divider dark/>
                                <MenuItem
                                    style={{background:"#006666",color:"white"}}
                                    onClick={()=> window.location.href="/teacher/subjectMaterial/ScienceTeachersView"}
                                >
                                    Science
                                </MenuItem>
                                <Divider dark/>
                                <MenuItem
                                    style={{background:"#006666",color:"white"}}
                                    onClick={handleClose}>
                                    English
                                </MenuItem>
                                <Divider dark/>
                                <MenuItem
                                    style={{background:"#006666",color:"white"}}
                                    onClick={handleClose}>
                                    History
                                </MenuItem>
                                <Divider dark/>
                            </Menu>
                        </Grid>

                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn}>Time Table</Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn}>Profile</Button>
                        </Grid>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn}>
                                <i className="fas fa-sign-out-alt"></i>
                                 Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
