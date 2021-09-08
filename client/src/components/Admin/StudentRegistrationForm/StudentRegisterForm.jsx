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
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class StudentRegistrationForm extends Component{

    state = {
        AdministrationNumber:'',
        firstName:'',
        lastName:'',
        selectedDate:'',
        age:0,
        grade:0,
        email:'',
        password:'',
        minimumDate:'',
        open:false,
        maximumDate:''
    }

    componentDidMount = async () => {
        const date = new Date()
        const minimum = "01/01/"+ await (date.getFullYear()-19);
        const maximum = "12/31/"+ await (date.getFullYear()-7);
        await this.setState({selectedDate:maximum})
        await this.setState({minimumDate:minimum});
        await this.setState({maximumDate:maximum});

        await axios.get('http://localhost:5000/admin/getGeneratedId').then(res => {
            if(res.data.success){
                this.setState({AdministrationNumber:res.data.id})
            }
        })

        console.log(minimum);
    }

    handleDateChange = async (date) => {
        this.setState({selectedDate:date.getMonth()+ "/" +date.getDate()+ "/" +date.getFullYear()})
        const currentDate = new Date()
        const diff = await currentDate.getFullYear() - date.getFullYear();
        this.setState({age:diff});

        switch (diff) {
            case 7: this.setState({grade:1})
                break;
            case 8: this.setState({grade:2})
                break;
            case 9: this.setState({grade:3})
                break;
            case 10: this.setState({grade:4})
                break;
            case 11: this.setState({grade:5})
                break;
            case 12: this.setState({grade:6})
                break;
            case 13: this.setState({grade:7})
                break;
            case 14: this.setState({grade:8})
                break;
            case 15: this.setState({grade:9})
                break;
            case 16: this.setState({grade:10})
                break;
            case 17: this.setState({grade:11})
                break;
            case 18: this.setState({grade:12})
                break;
            case 19: this.setState({grade:13})
                break;
            default: this.setState({grade:0})
                break;

        }
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    submitDetails = async (e) => {
        e.preventDefault();

        const student = {
            "administrationNum":this.state.AdministrationNumber,
            "name":this.state.firstName + " " + this.state.lastName,
            "birthday":this.state.selectedDate,
            "age":this.state.age,
            "grade":this.state.grade,
            "email":this.state.email,
            "password":this.state.password

        }

        await axios.post('http://localhost:5000/admin/addStudent',student).then(async res => {
            if(res.data.success){
                this.setState({open:true});
                await setTimeout(() => {
                    this.setState({open:false});
                }, 3000);
                await setTimeout(() => {
                window.location = "/"
                }, 2000);
            }
        })
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({open:false});
    };

    render() {
        return (

            <div style={{width:"60%",marginLeft:"18%",marginTop:"50px",
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
                            name="AdministrationNumber"
                            label="Administration Number"
                            fullWidth
                            value={this.state.AdministrationNumber}
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
        );
    }
}


export default StudentRegistrationForm;
