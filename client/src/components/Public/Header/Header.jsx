import {Divider, makeStyles} from '@material-ui/core'
import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import decode from "jwt-decode";

//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import axios from "axios";

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
            backgroundImage: 'url(/Assets/user.svg)',
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
            backgroundImage: 'url(/Assets/privacy.svg)',
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
    const [anchorEltwo,setAnchorEltwo] = React.useState(null);
    const [user,setUser] = React.useState(null);
    const [username,setUsername] = React.useState(null);
    const [password,setPassword] = React.useState(null);
    const [name,setName] = React.useState(null);

    useEffect (() => {
        if(sessionStorage.token) {
            setUser(decode(sessionStorage.token).position);
            setName(decode(sessionStorage.token).name);
        }else {
            setUser('guest')
        }

        console.log(user);
    });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOther = (event) => {
        setAnchorEltwo(event.currentTarget);
    };

    const handleCloseOther = () => {
        setAnchorEltwo(null)
    }

    const handleUserName = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            username:username,
            password:password
        }

        await axios.post('http://localhost:5000/login/login',user).then(res => {
            if(res.data.success){
                window.location.reload(false);
                sessionStorage.setItem("token",res.data.token)

                if(sessionStorage.token) {
                    setUser(decode(sessionStorage.token).position);
                }

                if(user === 'Admin'){
                    window.location = '/admin/studentRetrieve'
                }

            }else{
                alert(res.data.message)
            }
        })

    }

    const handleLogout = () => {
        window.location.reload(false);
        sessionStorage.clear();
        setUser('guest');
    }

    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item className={classes.gridLeftSpacing}>
                    <img src="/Assets/H2MD.png" alt="" className={classes.headerLogo} />
                </Grid>
                <Grid item className={classes.gridRightSpacing}>

                    {user === 'guest' ?
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="filled-basic"
                            placeholder="User Name"
                            variant="outlined"
                            className={classes.userInput}
                            onChange={handleUserName}
                            size="small"
                        />
                        <TextField
                            variant="outlined"
                            id="standard-password-input"
                            placeholder="Password"
                            type="password"
                            autoComplete="current-password"
                            className={classes.userPassword}
                            onChange={handlePassword}
                            size="small"
                        />
                        <Button variant="contained" onClick={handleSubmit} className={classes.loginBtn}><ChevronRightIcon /></Button>
                        <Typography className={classes.userLink}>
                            <Link style={{color:"#006666"}} href="#">
                                Forgotten your username or password ?
                            </Link>
                        </Typography>
                    </form>
                        : <>
                            <Typography variant="h3"><PersonSharpIcon style={{ fontSize: 50, marginBottom:10 }}/>{name}</Typography></> }
                </Grid>
            </Grid>

            <Grid container className={classes.menuContianer} justifyContent="space-between">
                <Grid item xs={10}>
                    <>
                    {user === 'Admin' ?
                        <>
                    <Grid container>
                        <Grid item className={classes.menuItem}>
                            <Button style={{background:"#006666"}} className={classes.menuBtn}>Home</Button>
                        </Grid>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn} aria-haspopup="true" onClick={handleClick}>
                                teacher
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
                                    onClick={()=> window.location.href="/admin/DisplayTeacher"}
                                >
                                    View Teachers
                                </MenuItem>
                                <Divider dark/>
                                <MenuItem
                                    style={{background:"#006666",color:"white"}}
                                    onClick={()=> window.location.href="/admin/addTeacher"}
                                >
                                    Add Teacher
                                </MenuItem>
                            </Menu>
                        </Grid>
                        <Grid item className={classes.menuItem}>
                            <Button className={classes.menuBtn} aria-haspopup="true" onClick={handleClickOther}>
                                students
                                <KeyboardArrowDownIcon />
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEltwo}
                                keepMounted
                                open={Boolean(anchorEltwo)}
                                onClose={handleCloseOther}
                            >
                                <MenuItem
                                    style={{background:"#006666",color:"white"}}
                                    onClick={()=> window.location.href="/"}
                                >
                                    View Students
                                </MenuItem>
                                <Divider dark/>
                                <MenuItem
                                    style={{background:"#006666",color:"white"}}
                                    onClick={()=> window.location.href="/admin/studentRegister"}
                                >
                                    Add student
                                </MenuItem>

                            </Menu>
                        </Grid>
                    </Grid>
                    </>
                        : user === 'student' ?
                        <>
                        <Grid container>
                            <Grid item className={classes.menuItem}>
                                <Button style={{background:"#006666"}} className={classes.menuBtn}>Home</Button>
                            </Grid>
                            <Grid item className={classes.menuItem}>
                                <Button className={classes.menuBtn}
                                        onClick={()=> window.location.href="/displayEvent"}
                                >Events</Button>
                            </Grid>
                            <Grid item className={classes.menuItem}>
                                <Button className={classes.menuBtn}
                                        onClick={()=> window.location.href="/displayEvent"}
                                >Timetable</Button>
                            </Grid>
                        </Grid>
                        </>
                        :
                            <>
                            <Grid container>
                                <Grid item className={classes.menuItem}>
                                    <Button style={{background:"#006666"}} className={classes.menuBtn}>Home</Button>
                                </Grid>
                                <Grid item className={classes.menuItem}>
                                    <Button className={classes.menuBtn}
                                            onClick={()=> window.location.href="/displayEvent"}
                                    >Events</Button>
                                </Grid>
                                <Grid item className={classes.menuItem}>
                                    <Button className={classes.menuBtn}
                                            onClick={()=> window.location.href="/displayEvent"}
                                    >Timetable</Button>
                                </Grid>
                            </Grid>
                            </>
                            }
                            </>
                    </Grid>

                <Grid item>
                    <Grid container>
                        {user === 'Admin' ?
                            <>
                                 <Grid item className={classes.menuItem}>
                                     <Button onClick={handleLogout} className={classes.menuBtn}>
                                        <i className="fas fa-sign-out-alt"></i>
                                            Logout
                                        </Button>
                                </Grid>
                            </>
                            : user === 'student' ?
                                <>
                                    <Grid item className={classes.menuItem}>
                                        <Button className={classes.menuBtn}
                                                onClick={()=> window.location.href="/profile"}>Profile</Button>
                                    </Grid>
                                    <Grid item className={classes.menuItem}>
                                        <Button onClick={handleLogout} className={classes.menuBtn}>
                                            <i className="fas fa-sign-out-alt"></i>
                                            Logout
                                        </Button>
                                    </Grid>
                                </>
                                :
                            <Grid item className={classes.menuItem}>
                                <Button onClick={handleLogout} className={classes.menuBtn}>
                                    LogIn
                                    </Button>
                            </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
