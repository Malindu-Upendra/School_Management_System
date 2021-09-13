import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {Input, TextareaAutosize} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios from "axios";
import {FormControl, InputGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {Alert} from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

class UpdateEvent extends Component{

    state = {
        eventID:'',
        eventName:'',
        description:'',
        venue:'',
        link:'',
        selectedDate:'',
        flyer:'',
        name:'',
        email:'',
        phoneNumber:0,
        previewImage:'',
        minimumDate:'',
        cloudinaryID:'',
        open:false
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;

        await axios.get(`http://localhost:5000/public/getSpecificEvent/${id}`).then(res => {
            if(res.data.success){
               this.setState({eventID:res.data.data._id})
                this.setState({eventName:res.data.data.eventName})
                this.setState({description:res.data.data.description})
                this.setState({venue:res.data.data.venue})
                this.setState({link:res.data.data.link})
                this.setState({selectedDate:new Date(res.data.data.selectedDate)})
                this.setState({name:res.data.data.name})
                this.setState({email:res.data.data.email})
                this.setState({phoneNumber:res.data.data.phoneNumber})
                this.setState({previewImage:res.data.data.flyer})
                this.setState({minimumDate:new Date()})
                this.setState({cloudinaryID:res.data.data.cloudinaryID})
                console.log(this.state.event)
            }
        })
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

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    handleDateChange = (date) => {
        this.setState({selectedDate:(date.getMonth()+1)+ "/" +date.getDate()+ "/" +date.getFullYear()})
    }

    handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false});
    };

    onSubmit = async (event) => {
        event.preventDefault();

        let Event = new FormData();
        Event.append("id", this.state.eventID);
        Event.append("eventName", this.state.eventName);
        Event.append("description", this.state.description);
        Event.append("venue", this.state.venue);
        Event.append("link", this.state.link);
        Event.append("selectedDate", this.state.selectedDate);
        Event.append("flyer", this.state.flyer);
        Event.append("name", this.state.name);
        Event.append("email", this.state.email);
        Event.append("phoneNumber", this.state.phoneNumber);
        Event.append("cloudinaryID", this.state.cloudinaryID);

        await axios.put('http://localhost:5000/public/updateSpecificEvent',Event).then(async res => {
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

    render() {
        return(
            <>
            <Grid container spacing={3} style={{width:'95%',margin:'auto',marginTop:'50px',}}>
                <Grid item xs={6} style={{}}>
                    <Typography style={{textAlign:"center"}} gutterBottom variant="h6">
                        Preview
                    </Typography>
                    <Card style={{maxHeight:'745px',overflowY:"scroll"}}>
                        <CardActionArea>
                            <CardMedia
                                style={{height:'550px'}}
                                image={this.state.previewImage}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography style={{textAlign:"center"}} gutterBottom variant="h6">
                                    {this.state.eventName}
                                </Typography>
                                <Grid>
                                    <p>{this.state.description}</p>
                                </Grid>
                                <Grid>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">Venue</InputGroup.Text>
                                        <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            value={this.state.venue}
                                            disabled
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">Link</InputGroup.Text> <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        value={this.state.link}
                                        disabled
                                    />
                                    </InputGroup>
                                </Grid>
                                <Grid>
                                    <h5 style={{marginTop:"10px"}}>Contact Details </h5>
                                    <h6>Name : {this.state.name}</h6>
                                    <h6>Email : {this.state.email}</h6>
                                    <h6>Phone Number : {this.state.phoneNumber}</h6>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} style={{boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)",height:'797px',overflowY:"scroll"}}>
                        <Grid item>
                            <TextField
                                required
                                id="filled-secondary"
                                name="eventName"
                                label="Event Name"
                                color="primary"
                                focused={true}
                                value={this.state.eventName}
                                fullWidth
                                autoComplete="off"
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item >
                            <TextareaAutosize
                                minRows={7}
                                style={{width:"100%",marginTop:'10px'}}
                                aria-label="maximum height"
                                value={this.state.description}
                                placeholder="Description"
                                name="description"
                                color="primary"
                                focused={true}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="lastName"
                                name="venue"
                                label="Venue (Optional)"
                                type="text"
                                value={this.state.venue}
                                color="primary"
                                focused={true}
                                style={{marginTop:"10px"}}
                                fullWidth
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="lastName"
                                name="link"
                                label="Link (Optional)"
                                type="text"
                                value={this.state.link}
                                color="primary"
                                focused={true}
                                style={{marginTop:"10px"}}
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
                                    color="primary"
                                    focused={true}
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
                        <Grid item>
                            <Input
                                id="lastName"
                                name="flyer"
                                type="file"
                                accept="images*/"
                                onChange={this.handleImage}
                                fullWidth
                            />
                        </Grid>
                        <Grid item>
                            <h4 style={{textAlign:"center",marginTop:'20px'}}>Contact Person's Details</h4>
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="address1"
                                name="name"
                                label="Name"
                                value={this.state.name}
                                color="primary"
                                focused={true}
                                fullWidth
                                type="text"
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="address2"
                                name="email"
                                label="Email"
                                type="text"
                                value={this.state.email}
                                color="primary"
                                focused={true}
                                style={{marginTop:"10px"}}
                                fullWidth
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                required
                                id="address2"
                                name="phoneNumber"
                                label="Phone Number"
                                type="number"
                                value={this.state.phoneNumber}
                                color="primary"
                                focused={true}
                                fullWidth
                                onChange={this.handleChange}
                                style={{marginBottom:'50px',marginTop:"10px"}}
                            />
                        </Grid>
                        <Grid item>
                            <ButtonGroup disableElevation fullWidth variant="contained" >
                                <Button style={{backgroundColor:'#668cff'}} onClick={()=> window.location.href="/displayEvent"}>Cancel</Button>
                                <Button style={{backgroundColor:'#80ff80'}} onClick={this.onSubmit}>Update</Button>
                            </ButtonGroup>
                        </Grid>
                </Grid>
            </Grid>
        <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleCloseSnackbar}>
            <Alert onClose={this.handleCloseSnackbar} severity="success">
                Successfully Uploaded!
            </Alert>
        </Snackbar>
            </>
        )
    }

}

export default UpdateEvent;