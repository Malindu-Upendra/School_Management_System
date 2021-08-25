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
        phoneNumber:'',
        minimumDate:''
    }

    componentDidMount = () => {

        this.setState({minimumDate: new Date()})
        this.setState({selectedDate: new Date()})

    }

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
                            fullWidth
                            onChange={this.handleChange}
                        />
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
                            autoComplete="Email"
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
                            autoComplete="Email"
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
                            onClick={this.submitDetails}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
                <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Successfully Inserted!
                    </Alert>
                </Snackbar>
            </div>
        )
    }

}

export default AddEvent;