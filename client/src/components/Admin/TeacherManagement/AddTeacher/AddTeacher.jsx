import React, {Component} from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SelectGrade from "react-select";
import { Form } from "react-bootstrap";
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import axios from "axios";

class AddTeacher extends Component{

    state = {
        selectedOptions:[],
        empNum:'',
        fullName:'',
        gender:'',
        qualification:'',
        section:'',
        subject:'',
        grade:0,
        checkedB:false,
        Grade : [
            { value: "1", label: "Grade 01" },
            { value: "2", label: "Grade 02" },
            { value: "3", label: "Grade 03" },
            { value: "4", label: "Grade 04" },
            { value: "5", label: "Grade 05" },
            { value: "6", label: "Grade 06" },
            { value: "7", label: "Grade 07" },
            { value: "8", label: "Grade 08" },
            { value: "9", label: "Grade 09" },
            { value: "10", label: "Grade 10" },
            { value: "11", label: "Grade 11" },
            { value: "12", label: "Grade 12" },
            { value: "13", label: "Grade 13" },
        ]
    }

    componentDidMount = () => {
        this.setState({selectedDate:new Date()})
        console.log(this.state.selectedDate)
    }

    selectCategory = async (e) => {
        await this.setState({ selectedOptions: e ? e.map(item => item.value) : [] });
        console.log(this.state.options);
    }

    handleChange = (event) => {

        const {name,value} = event.target
        this.setState({ [name]: value});
    }

    handleCheckBox = (event) => {
        this.setState({checkedB: event.target.checked})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const teacher = {
            empNum:this.state.empNum,
            fullName : this.state.fullName,
            gender: this.state.gender,
            qualification: this.state.qualification,
            sectionalHead: this.state.checkedB,
            section: this.state.section,
            selectedGrades: this.state.selectedOptions,
            subject:this.state.subject
        }

        axios
            .post("http://localhost:5000/admin/addTeacher", teacher)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        console.log(teacher);
    }

    render() {
        return (

            <div style={{width:"60%",marginLeft:"18%",marginTop:"100px",
                border:"#a3a375", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                <Typography variant="h6" style={{textAlign:"center", marginBottom:"35px"}} gutterBottom>
                    Teacher Recruitment Form
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="empNum"
                            label="Employee Number"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="fullName"
                            name="fullName"
                            label="Full name"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>

                    <FormControl component="fieldset" style={{marginLeft:"2%",marginTop:"15px"}}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row aria-label="position" name="gender" onChange={this.handleChange} defaultValue="top">
                            <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                        </RadioGroup>
                    </FormControl>

                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="qualification"
                            label="Qualification"
                            onChange={this.handleChange}
                            fullWidth
                            type="text"
                        />
                    </Grid>

                    <FormControlLabel
                        style={{marginLeft: "1%"}}
                        control={
                            <Checkbox
                                checked={this.state.checkedB}
                                onChange={this.handleCheckBox}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Sectional Head"
                    />
                    {this.state.checkedB ?
                        <Grid item xs={12}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple" style={{width:"98%"}}>Grade</InputLabel>
                                <Select
                                    native
                                    value={this.state.section}
                                    onChange={this.handleChange}
                                    label="Section"
                                    inputProps={{
                                        name: 'section',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="Select Grade" value="Select Grade" />
                                    <option value={"Primary"}>Primary</option>
                                    <option value={"Secondary"}>Secondary</option>
                                    <option value={"College"}>College</option>
                                </Select>
                            </FormControl>
                        </Grid>
                        : null}
                    <Form.Group style={{width:"95%", marginLeft:'2%', marginTop:'15px'}}>
                        <SelectGrade
                            style={{width:"100%"}}
                            options={this.state.Grade}
                            onChange={this.selectCategory}
                            className="basic-multi-select"
                            isMulti/>
                    </Form.Group>

                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="subject"
                            label="Subject"
                            type="text"
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{marginTop:"15px",width:"100%"}}
                            startIcon={<SaveIcon />}
                            onClick={this.handleSubmit}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default AddTeacher;