import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {InputBase, InputLabel, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SubjectMaterialInsertionForm extends Component{
    constructor(props) {
        super(props);
    }

    state = {
        term: '',
        week: '',
        subjectChoose: '',
        unitName: '',
        lectureLink: '',
        lessonUpload: '',
        open:false
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const  AddSubjectMaterials ={
            "term": this.state.term,
            "week": this.state.week,
            "subjectChoose": this.state.subjectChoose,
            "unitName": this.state.unitName,
            "lectureLink": this.state.lectureLink,
            "lessonUpload": this.state.lessonUpload
        };
        console.log('Data send:', AddSubjectMaterials)
        await axios.post('http://localhost:5000/teacher/insertSubjectMaterials',AddSubjectMaterials)
            .then(async response => {
                if(response.data.success){
                    this.setState({open:true});
                    await setTimeout(() => {
                        this.setState({open:false});
                    }, 5000);
                    await setTimeout(() => {
                        window.location.reload(false);
                    }, 2000);
                }
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }
        this.setState({open:false});
    };

    render() {
        return(
            <>
                <div style={{width:"60%",marginLeft:"18%",marginTop:"100px",
                    border:"#008080", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                    <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                        Subject Materials
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Choose the Term</InputLabel>
                                <Select
                                    required
                                    native
                                    value={this.state.term}
                                    onChange={this.handleChange}
                                    label="Choose the Term"
                                    inputProps={{
                                        name: 'term',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={"Term 01"}>Term 1</option>
                                    <option value={"Term 02"}>Term 2</option>
                                    <option value={"Term 03"}>Term 3</option>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Choose the Week</InputLabel>
                                <Select
                                    required
                                    native
                                    value={this.state.week}
                                    onChange={this.handleChange}
                                    label="Choose the Week"
                                    inputProps={{
                                        name: 'week',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={"Week 1"}>Week 1</option>
                                    <option value={"Week 2"}>Week 2</option>
                                    <option value={"Week 3"}>Week 3</option>
                                    <option value={"Week 4"}>Week 4</option>
                                    <option value={"Week 5"}>Week 5</option>
                                    <option value={"Week 6"}>Week 6</option>
                                    <option value={"Week 7"}>Week 7</option>
                                    <option value={"Week 8"}>Week 8</option>
                                    <option value={"Week 9"}>Week 9</option>
                                    <option value={"Week 10"}>Week 10</option>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                        <FormControl variant="outlined" style={{width:"100%"}}>
                            <InputLabel htmlFor="outlined-age-native-simple">Select Subject</InputLabel>
                            <Select
                                required
                                native
                                value={this.state.subjectChoose}
                                onChange={this.handleChange}
                                label="Select Subject"
                                inputProps={{
                                    name: 'subjectChoose',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={"Mathematics"}>Mathematics</option>
                                <option value={"Science"}>Science</option>
                                <option value={"English"}>English</option>
                                <option value={"History"}>History</option>
                            </Select>
                        </FormControl>
                    </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="lessonName"
                                name="unitName"
                                value={this.state.unitName}
                                onChange={this.handleChange}
                                label="Unit topic Name"
                                placeholder="lesson name "
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="lecLink"
                                name="lectureLink"
                                value={this.state.lectureLink}
                                onChange={this.handleChange}
                                label="Lecture Link"
                                placeholder="insert the lecture link here"
                                variant="outlined"
                                multiline
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="subtitle1" display="block" gutterBottom>
                               Upload Lesson Materials
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <input
                                accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation"
                                // className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{marginTop:"15px",width:"100%"}}
                                startIcon={<SaveIcon />}
                                onClick={this.handleSubmit}
                            >
                                Insert
                            </Button>

                        </Grid>
                    </Grid>
                    <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity="success">
                            Successfully Inserted!
                        </Alert>
                    </Snackbar>
                </div>
            </>
        )
    }
}
export default SubjectMaterialInsertionForm