import {Component} from "react";
import { styled } from '@material-ui/core/styles';
import {Button, TextField, FormControl, Grid, MenuItem, Select, InputLabel,} from "@material-ui/core";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from "axios";

const MyGrid = styled(Grid)({
    marginBottom:"5%",
});

const MyText = styled(TextField)({

});

const MySelect = styled(Select)({
    width:"100%",
});

const MyForm = styled(FormControl)({
    width:"100%",
});

const MyGrid1 = styled(Grid)({
    backgroundColor:"white",
    borderRadius:"15px",
    border:"1px solid",
    marginBottom:"5%",
    padding:"2%"

});

const MyGrid2 = styled(Grid)({
    width:"80vw",
    marginTop:"5%",
    backgroundColor:"White",
    borderRadius:"15px",
    paddingTop:"5%",
    paddingLeft:"5%",
    paddingRight:"5%",
    paddingBottom:"2%",
    border:"2px solid",
    marginLeft:"10%",

});



export class Classroom_timetable extends Component {

    state = {
            grade:"",
            day: "",
            subjectname: "",
            title: "",
            time: "",
            subjectcode: "",
            teacher: "",
            link: ""
        }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        let timetable = {
            grade: this.state.grade,
            day: this.state.day,
            subjectname: this.state.subjectname,
            title: this.state.title,
            time: this.state.time,
            subjectcode: this.state.subjectcode,
            teacher: this.state.teacher,
            link: this.state.link
        }
        console.log(timetable)

        axios.post('http://localhost:5000/classroom/insertclassroom',timetable).
        then(response => {
            if (response.data.success) {
                alert(response.data.message)
                window.location = '/'
            } else {
                alert('Failed to insert')
            }
        })
            .catch(err => console.log(err));

    };


    render() {
        return (

            <div>

                <MyGrid2 container spacing={1}>

                    <MyGrid item xs={12}>
                        <MyText
                            required
                            id="grade"
                            name="grade"
                            label="Grade"
                            placeholder="Grade-06"
                            fullWidth
                            variant="outlined"
                            autoComplete="Grade"
                            value={this.state.grade}
                            onChange={this.handleChange}
                        />
                    </MyGrid>
                    <MyGrid1 container spacing={3}>

                        <Grid item xs={12} sm={6}>
                            <MyForm variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">Day*</InputLabel>
                                <MySelect
                                    required
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Day"
                                    fullWidth
                                    name="day"
                                    value={this.state.day}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Monday"}>Monday</MenuItem>
                                    <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                                    <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                                    <MenuItem value={"Thursday"}>Thursday</MenuItem>
                                    <MenuItem value={"Friday"}>Friday</MenuItem>
                                </MySelect>
                            </MyForm>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="time"
                                name="time"
                                label="Time"
                                fullWidth
                                variant="outlined"
                                autoComplete="08:00am"
                                value={this.state.time}
                                onChange={this.handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="subjectname"
                                name="subjectname"
                                label="Subject Name"
                                fullWidth
                                variant="outlined"
                                autoComplete="Maths"
                                value={this.state.subjectname}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="subjectcode"
                                name="subjectcode"
                                label="Subject Code"
                                fullWidth
                                variant="outlined"
                                autoComplete="His06"
                                value={this.state.subjectcode}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                label="Title"
                                fullWidth
                                variant="outlined"
                                autoComplete="Mr"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="incharge"
                                name="teacher"
                                label="Teacher Incharge"
                                fullWidth
                                variant="outlined"
                                value={this.state.teacher}
                                onChange={this.handleChange}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="link"
                                name="link"
                                label="Link"
                                fullWidth
                                variant="outlined"
                                value={this.state.link}
                                onChange={this.handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                size="large"
                                color="primary"
                                variant="contained"
                                style={{marginLeft:"25%",width:"50%"}}
                                startIcon={
                                    <AddCircleRoundedIcon />}
                            >Add More Details</Button>
                        </Grid>
                    </MyGrid1>
                    <Grid item xs={12}>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            style={{marginLeft:"25%",width:"50%"}}
                            onClick={this.handleSubmit}
                            startIcon={
                                <AddBoxIcon/>}
                        >Add Timetable</Button>
                    </Grid>
                </MyGrid2>

            </div>



        );

    }
}
export default Classroom_timetable;