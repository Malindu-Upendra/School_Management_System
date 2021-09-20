import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, Select} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from "axios";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class MaterialsUpdateForm extends Component{

    state = {
        term: '',
        week: '',
        subjectChoose: '',
        unitName: '',
        lectureLink: '',
        lessonUpload: '',
        cloudinaryID: '',
        //previewUpload: '',
        open:false,
        id:''
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log(id);
        axios.get(`http://localhost:5000/teacher/getSpecificMaterials/${id}`).then(res => {
            if(res.data.success){
                const data = res.data.data
                this.setState({id:data._id})
                this.setState({term:data.term})
                this.setState({week:data.week})
                this.setState({subjectChoose:data.subjectChoose})
                this.setState({unitName:data.unitName})
                this.setState({lectureLink:data.lectureLink})
                // this.setState({previewUpload:data.lessonUpload})
                this.setState({cloudinaryID:data.cloudinaryID})
            }
        })
    }

    handleLessonUpload = async (e) => {
        await this.setState({lessonUpload:e.target.files[0]})
        console.log(this.state.lessonUpload)
    }

    handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }
        this.setState({open:false});
    };

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let  UpdateSubjectMaterials = new FormData();
        UpdateSubjectMaterials.append("id", this.state.id);
        UpdateSubjectMaterials.append("term", this.state.term);
        UpdateSubjectMaterials.append("week", this.state.week);
        UpdateSubjectMaterials.append("subjectChoose", this.state.subjectChoose);
        UpdateSubjectMaterials.append("unitName", this.state.unitName);
        UpdateSubjectMaterials.append("lectureLink", this.state.lectureLink);
        UpdateSubjectMaterials.append("lessonUpload", this.state.lessonUpload);
        UpdateSubjectMaterials.append("cloudinaryID", this.state.cloudinaryID);

        await axios.put('http://localhost:5000/teacher/updateMaterials',UpdateSubjectMaterials)
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

    render() {
        return(
            <>
                <div style={{width:"60%",marginLeft:"18%",marginTop:"100px",
                    border:"#008080", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                    <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                        Edit Subject Materials
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

                        {/*<Grid item xs={12}>*/}
                        {/*    <FormControl variant="outlined" style={{width:"100%"}}>*/}
                        {/*        <InputLabel htmlFor="outlined-age-native-simple">Select Subject</InputLabel>*/}
                        {/*        <Select*/}
                        {/*            required*/}
                        {/*            native*/}
                        {/*            value={this.state.subjectChoose}*/}
                        {/*            onChange={this.handleChange}*/}
                        {/*            label="Select Subject"*/}
                        {/*            inputProps={{*/}
                        {/*                name: 'subjectChoose',*/}
                        {/*                id: 'outlined-age-native-simple',*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <option aria-label="None" value="" />*/}
                        {/*            <option value={"Mathematics"}>Mathematics</option>*/}
                        {/*        </Select>*/}
                        {/*    </FormControl>*/}
                        {/*</Grid>*/}

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="lessonName"
                                name="subjectChoose"
                                value={this.state.subjectChoose}
                                // onChange={this.handleChange}
                                label="Select Subject"
                                placeholder="Select Subject "
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
                                // variant="outlined"
                                multiline
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="lessonName"
                                name="cloudinaryID"
                                value={this.state.cloudinaryID}
                                label="Uploaded Lesson Materials"
                                placeholder="lesson name "
                                // variant="outlined"
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="subtitle1" display="block" gutterBottom>
                                Update Lesson Materials
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
                                onClick={()=> window.location.href=`/teacher/subjectMaterial/${this.state.subjectChoose}`}
                            >
                                Cancel
                            </Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{marginTop:"15px",width:"100%"}}
                                startIcon={<BorderColorIcon />}
                                onClick={this.handleSubmit}
                            >
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                    <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity="success">
                            Successfully Updated!
                        </Alert>
                    </Snackbar>
                </div>
            </>
        )
    }
}

export default MaterialsUpdateForm