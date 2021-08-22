import React,{Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "@material-ui/lab";

class AddEvent extends Component{

    state = {
        eventName:''
    }

    render() {
        return(
            <div style={{width:"60%",marginLeft:"18%",marginTop:"50px",
                border:"#a3a375", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                    Add Event
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="eventName"
                            label="Event Name"
                            fullWidth
                            value={this.state.eventName}
                            autoComplete="shipping address-line1"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date Of Birth"
                                format="MM/dd/yyyy"
                                name="selectedDate"
                                minDate={this.state.minimumDate}
                                maxDate={this.state.maximumDate}
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
                        <TextField
                            required
                            id="address1"
                            name="age"
                            label="Age"
                            value={this.state.age}
                            fullWidth
                            type="number"
                            autoComplete="Age"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" style={{width:"100%"}}>
                            <InputLabel htmlFor="outlined-age-native-simple" style={{width:"98%"}}>Grade</InputLabel>
                            <Select
                                native
                                value={this.state.grade}
                                onChange={this.handleChange}
                                label="Grade"
                                inputProps={{
                                    name: 'grade',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="Select Grade" value="Select Grade" />
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                                <option value={11}>11</option>
                                <option value={12}>12</option>
                                <option value={13}>13</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            autoComplete="Email"
                            onChange={this.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            autoComplete="Password"
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