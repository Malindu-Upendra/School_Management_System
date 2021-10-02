import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import decode from "jwt-decode";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SubjectMaterialInsertionForm extends Component{
    state = {
        term: '',
        week: '',
        subjectChoose: '',
        unitName: '',
        lectureLink: '',
        lessonUpload: '',
        open:false,
        grade:0,
        username:''
    }

    componentDidMount = () => {
        const grade = this.props.match.params.grade;
        const subject = this.props.match.params.subject;
        this.setState({grade:grade})
        this.setState({subjectChoose:subject})
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleLessonUpload = (e) => {
        this.setState({lessonUpload:e.target.files[0]})
        console.log(e.target.files[0])
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let  AddSubjectMaterials = new FormData();
        AddSubjectMaterials.append("term", this.state.term);
        AddSubjectMaterials.append("week", this.state.week);
        AddSubjectMaterials.append("subjectChoose", this.state.subjectChoose);
        AddSubjectMaterials.append("unitName", this.state.unitName);
        AddSubjectMaterials.append("lectureLink", this.state.lectureLink);
        AddSubjectMaterials.append("lessonUpload", this.state.lessonUpload);
        AddSubjectMaterials.append("grade", this.state.grade);

        console.log('Data send:', AddSubjectMaterials)
        await axios.post('http://localhost:5000/teacher/insertSubjectMaterials',AddSubjectMaterials)
            .then(async response => {
                if(response.data.success){
                    this.setState({open:true});
                    await setTimeout(() => {
                        this.setState({open:false});
                    }, 5000);
                    await setTimeout(() => {
                        window.location = `/teacher/subjectMaterial/${this.state.subjectChoose}/${this.state.grade}`
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
                                    <option value={1}>Term 1</option>
                                    <option value={2}>Term 2</option>
                                    <option value={3}>Term 3</option>
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
                            <TextField
                                required
                                id="lecLink"
                                name="subjectChoose"
                                value={this.state.subjectChoose}
                                onChange={this.handleChange}
                                label="Subject"
                                variant="outlined"
                                multiline
                                fullWidth
                                autoComplete=""
                            />
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
                                onChange={this.handleLessonUpload}
                                name="lessonUpload"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{marginTop:"15px",width:"100%"}}
                                startIcon={<ArrowBackIcon />}
                                onClick={()=> window.location.href=`/teacher/subjectMaterial/${this.state.subjectChoose}/${this.state.grade}`}
                            >
                                cancel
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
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
