import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, Select} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from "axios";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class NoticeUpdateForm extends Component{

    state = {
        // TeacherNotices:[],
        noticeHeading: '',
        noticeDetails: '',
        subjectSelect: '',
        open:false
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log(id);
        axios.get(`http://localhost:5000/teacher/getSpecificNotices/${id}`).then(res => {
            if(res.data.success){
                const data = res.data.data
                this.setState({id:data._id})
                this.setState({noticeHeading:data.noticeHeading})
                this.setState({noticeDetails:data.noticeDetails})
                this.setState({subjectSelect:data.subjectSelect})
            }
        })
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

    handleSubmit = (e) => {
        e.preventDefault();
        const  AddNotices ={
            id:this.state.id,
            noticeHeading: this.state.noticeHeading,
            noticeDetails: this.state.noticeDetails,
            subjectSelect: this.state.subjectSelect
        };
        console.log('Data send:', AddNotices)
        axios.put('http://localhost:5000/teacher/updateSubjectNotices',AddNotices)
            .then(async response => {
                if(response.data.success){
                    this.setState({open:true});
                    await setTimeout(() => {
                        this.setState({open:false});
                    }, 5000);
                    await setTimeout(() => {
                        window.location = `/teacher/subjectMaterial/${this.state.subjectSelect}`
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
                <div style={{width:"40%",marginLeft:"28%",marginTop:"100px",
                    border:"#008080", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                    <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                        Edit Notices
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
                                onClick={()=> window.location.href=`/teacher/subjectMaterial/${this.state.subjectSelect}`}
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

export default NoticeUpdateForm