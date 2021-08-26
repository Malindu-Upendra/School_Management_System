import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, Select} from "@material-ui/core";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class NoticeInsertForm extends Component{
    // constructor(props) {
    //     super(props);
    // }

    state = {
        noticeHeading: '',
        noticeDetails: '',
        subjectSelect: '',
        open:false
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const  AddNotices ={
            "noticeHeading": this.state.noticeHeading,
            "noticeDetails": this.state.noticeDetails,
            "subjectSelect": this.state.subjectSelect
        };
        console.log('Data send:', AddNotices)
       await axios.post('http://localhost:5000/teacher/insertSubjectNotices',AddNotices)
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
                <div style={{width:"40%",marginLeft:"28%",marginTop:"100px",
                    border:"#008080", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                    <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                        Notices
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="noticeHeading"
                                name="noticeHeading"
                                value={this.state.noticeHeading}
                                onChange={this.handleChange}
                                label="Notice Heading"
                                placeholder="Type the heading"
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="noticeDescription"
                                name="noticeDetails"
                                value={this.state.noticeDetails}
                                onChange={this.handleChange}
                                label="Notice Details"
                                placeholder="Describe the Notice"
                                multiline
                                fullWidth
                                autoComplete=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Select Subject</InputLabel>
                                <Select
                                    required
                                    native
                                    value={this.state.subjectSelect}
                                    onChange={this.handleChange}
                                    label="Select Subject"
                                    inputProps={{
                                        name: 'subjectSelect',
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

                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{marginTop:"15px",width:"100%"}}
                                startIcon={<ArrowBackIcon />}
                                onClick={()=> window.location.href="/teacher/subjectMaterial/SubjectMaterialTeachersView"}
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
export default NoticeInsertForm