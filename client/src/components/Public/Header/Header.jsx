import { makeStyles } from '@material-ui/core'
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
            borderRadius: 0,
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
            borderRadius: 0,
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
        background: 'red',
        height: 40,
        borderRadius: 0,
        color: '#fff'
    },
    userLink: {
        marginTop: theme.spacing(1),
        textAlign: 'right',
    },
    menuContianer: {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
        background: 'gray',
        width: 'inherit',
    },
    menuBtn: {
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
                    <img src="/Assets/SLIIT.png" alt="" className={classes.headerLogo} />
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
                            <Link href="#">
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
                            <Button className={classes.menuBtn}>Menu 1</Button>
                        </Grid>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn}>Menu 2</Button>
                        </Grid>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn} aria-haspopup="true" onClick={handleClick}>
                                Menu 3
                                <KeyboardArrowDownIcon />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn}>Menu 2</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}
