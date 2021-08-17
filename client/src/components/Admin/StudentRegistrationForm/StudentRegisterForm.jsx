import React, {Component} from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import  { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

class StudentRegistrationForm extends Component{

    state = {
        selectedDate:'',
        grade:0
    }

    componentDidMount = () => {
        this.setState({selectedDate:new Date()})
        console.log(this.state.selectedDate)
    }

    handleDateChange = () => {

    }

    handleChange = (event) => {

        this.setState({ grade: event.target.value,
        });
    }

    render() {
        return (

            <div style={{width:"60%",marginLeft:"18%",marginTop:"100px",
                border:"#a3a375", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                    Student Registration
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Administration Number"
                            fullWidth
                            autoComplete="shipping address-line1"
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
                        />
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justifyContent="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
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
                            name="address1"
                            label="Age"
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
                            name="address2"
                            label="Email"
                            type="email"
                            fullWidth
                            autoComplete="Email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Password"
                            type="password"
                            fullWidth
                            autoComplete="Password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{marginTop:"15px",width:"100%"}}
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default StudentRegistrationForm;
