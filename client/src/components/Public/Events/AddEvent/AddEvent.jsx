import React,{Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";
import {Input, TextareaAutosize} from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from "axios";
import decode from "jwt-decode";

class AddEvent extends Component{

    state = {
        eventName:'',
        description:'',
        venue:'',
        link:'',
        selectedDate:'',
        flyer:'',
        name:'',
        email:'',
        phoneNumber:0,
        userID:'',
        minimumDate:'',
        previewImage:'',
        open:false,
        openModal:false
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    handleDateChange = (date) => {
        this.setState({selectedDate:(date.getMonth()+1)+ "/" +date.getDate()+ "/" +date.getFullYear()})
    }

    componentDidMount = () => {

        if(sessionStorage.token) {
            this.setState({userID:decode(sessionStorage.token).username});
            this.setState({login:true})
        }else {
            this.setState({user:'guest'})
            this.setState({login:false})
        }

        this.setState({minimumDate: new Date()})
        this.setState({selectedDate: new Date()})

    }

    handleImage = (e) => {
        this.setState({flyer:e.target.files[0]});
        this.handlePreviewImage(e.target.files[0])
    }

    handlePreviewImage = (image) => {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            this.setState({previewImage:reader.result});
        }
    }

    handleOpen = () => {
        this.setState({openModal:true})
    }

    handleClose = () => {
        this.setState({openModal:false})
    }

    onSubmit = async (event) => {
        event.preventDefault();

        let Event = new FormData();
        Event.append("eventName", this.state.eventName);
        Event.append("description", this.state.description);
        Event.append("venue", this.state.venue);
        Event.append("link", this.state.link);
        Event.append("selectedDate", this.state.selectedDate);
        Event.append("flyer", this.state.flyer);
        Event.append("name", this.state.name);
        Event.append("email", this.state.email);
        Event.append("phoneNumber", this.state.phoneNumber);
        Event.append("userID", this.state.userID);

        await axios.post('http://localhost:5000/student/addEvent',Event).then(async res => {
            if(res.data.success){
                this.setState({open:true});
                await setTimeout(() => {
                    this.setState({open:false});
                }, 3000);
                await setTimeout(() => {
                    window.location = "/displayEvent"
                }, 2000);
            }
        })
    }

    handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false});
    };

    render() {
        return(
            <div style={{width:"60%",marginLeft:"18%",marginTop:"50px",
                border:"#a3a375", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                <Typography variant="h4" style={{textAlign:"center"}} gutterBottom>
                    Event
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="eventName"
                            label="Event Name"
                            fullWidth
                            autoComplete="shipping address-line1"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            minRows={7}
                            style={{width:"100%"}}
                            aria-label="maximum height"
                            placeholder="Description"
                            name="description"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="lastName"
                            name="venue"
                            label="Venue (Optional)"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="lastName"
                            name="link"
                            label="Link (Optional)"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                required
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date"
                                format="MM/dd/yyyy"
                                name="selectedDate"
                                minDate={this.state.minimumDate}
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                style={{width:"98%"}}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid item xs={12}>
                        <Input
                            id="lastName"
                            name="flyer"
                            type="file"
                            accept="images*/"
                            onChange={this.handleImage}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<CloudUploadIcon />}
                            onClick={this.handleOpen}
                            fullWidth
                        >
                            Click to see the Preview
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                            <h4 style={{textAlign:"center"}}>Contact Person's Details</h4>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="name"
                            label="Name"
                            fullWidth
                            type="text"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address2"
                            name="email"
                            label="Email"
                            type="text"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address2"
                            name="phoneNumber"
                            label="Phone Number"
                            type="number"
                            fullWidth
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{marginTop:"15px",width:"100%"}}
                            startIcon={<SaveIcon />}
                            onClick={this.onSubmit}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
                <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleCloseSnackbar}>
                    <Alert onClose={this.handleCloseSnackbar} severity="success">
                        Successfully Uploaded!
                    </Alert>
                </Snackbar>
                <Grid item xs={12}>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={this.state.openModal}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    style={{width:'90%',margin:'auto'}}
                >
                    <Fade in={this.state.openModal}>
                        <div>
                            <img style={{width:'100%'}} src={this.state.previewImage}/>
                        </div>
                    </Fade>
                </Modal>
                </Grid>
            </div>
        )
    }

}

export default AddEvent;