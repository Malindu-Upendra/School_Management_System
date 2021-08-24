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
    marginBottom:"2%",

});



export class Exam_timetable extends Component {

       state = {
            grade:"",
            term: "",
            date: "",
            examtype: "",
           starttime: "",
           endtime: "",
            subjectcode: "",
            subjectname: ""
        }




    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value});
    }




    handleSubmit = (event) => {
        event.preventDefault();
        let etimetable = {
            grade: this.state.grade,
            term: this.state.term,
            date: this.state.date,
            examtype: this.state.examtype,
            starttime: this.state.starttime,
            endtime: this.state.endtime,
            subjectname: this.state.subjectname,
            subjectcode: this.state.subjectcode
    }
        console.log(etimetable)

        axios.post('http://localhost:5000/exam/insertexam',etimetable).
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

                <MyGrid2 container spacing={3}>

                    <MyGrid item xs={12} sm={6}>
                        <MyText style={{border:"1px solid", borderColor:"blue"}}
                            required
                            id="grade"
                            name="grade"
                            label="Grade"
                            fullWidth
                            placeholder="eg: Grade 07"
                            variant="filled"
                            autoComplete="Grade"
                            InputLabelProps={{shrink:true}}
                            value={this.state.grade}
                            onChange={this.handleChange}
                        />
                    </MyGrid>
                    <MyGrid item xs={12} sm={6}>
                        <MyForm variant="filled">
                            <InputLabel id="demo-simple-select-outlined-label" >Term* </InputLabel>
                            <MySelect style={{border:"1px solid", borderColor:"blue"}}
                                required
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Term"
                                name="term"
                                fullWidth
                                InputLabelProps={{shrink:true}}
                                value={this.state.term}
                                onChange={this.handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"1st Term"}>1st Term</MenuItem>
                                <MenuItem value={"2nd Term"}>2nd Term</MenuItem>
                                <MenuItem value={"3rd Term"}>3rd Term</MenuItem>

                            </MySelect>
                        </MyForm>
                    </MyGrid>
                    <MyGrid1 container spacing={3}>


                        <Grid item xs={12} sm={6}>
                            <TextField style={{border:"1px solid", borderColor:"blue"}}
                                required
                                id="date"
                                name="date"
                                label="Date"
                                type="date"
                                fullWidth
                                variant="filled"
                                InputLabelProps={{shrink:true}}
                                autoComplete="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                            />
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <MyForm variant="filled">
                                <InputLabel id="demo-simple-select-outlined-label" >Exam Type *</InputLabel>
                                <MySelect style={{border:"1px solid", borderColor:"blue"}}
                                          required
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined"
                                          label="Term"
                                          name="examtype"
                                          fullWidth
                                          InputLabelProps={{shrink:true}}
                                          value={this.state.examtype}
                                          onChange={this.handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"MCQ"}>MCQ</MenuItem>
                                    <MenuItem value={"Structured"}>Structured</MenuItem>
                                    <MenuItem value={"Essay Type"}>Essay Type</MenuItem>

                                </MySelect>
                            </MyForm>

                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField style={{border:"1px solid", borderColor:"blue"}}
                                required
                                id="stime"
                                name="starttime"
                                label="Starting Time"
                                       type="time"
                                fullWidth
                                variant="filled"
                                autoComplete="stime"
                                InputLabelProps={{shrink:true}}
                                value={this.state.starttime}
                                onChange={this.handleChange}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{border:"1px solid", borderColor:"blue"}}
                                required
                                id="etime"
                                name="endtime"
                                label="Ending Time"
                                fullWidth
                                       type="time"
                                variant="filled"
                                autoComplete="Ending Time"
                                InputLabelProps={{shrink:true}}
                                value={this.state.endtime}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{border:"1px solid", borderColor:"blue"}}
                                required
                                id="subjectcode"
                                name="subjectcode"
                                label="Subject Code"
                                fullWidth
                                variant="filled"
                                autoComplete="His06"
                                placeholder="eg:math06"
                                InputLabelProps={{shrink:true}}
                                value={this.state.subjectcode}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField style={{border:"1px solid", borderColor:"blue"}}
                                required
                                id="subjectname"
                                name="subjectname"
                                label="Subject Name"
                                fullWidth
                                placeholder="Maths"
                                variant="filled"
                                autoComplete="Maths"
                                InputLabelProps={{shrink:true}}
                                value={this.state.subjectname}
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
export default Exam_timetable;