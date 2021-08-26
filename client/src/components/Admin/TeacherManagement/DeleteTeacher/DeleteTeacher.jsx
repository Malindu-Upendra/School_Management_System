import React, {Component} from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from "axios";

class AddTeacher extends Component{

    state = {
        teachers: ''
    }


    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log(id);
        axios.get(`http://localhost:5000/admin/getSpecificTeacher/${id}`)
            .then(response => {
                if(response.data.success){
                    this.setState({teachers:response.data.data})
                }
            })
    }

    deleteTeacher = async(id) => {
        try {
            if(window.confirm("Do you want to remove this teacher's details from the database")){

                await axios.delete(`http://localhost:5000/admin/deleteTeacher/${id}`)
                    .then(res => {
                        if(res.data.success){
                            alert("Successfully Deleted");
                            this.props.history.push('/admin/DisplayTeacher')
                        }
                    })
            }

        } catch (err) {
            alert(err)
        }
    }

    render() {
        return (

            <div style={{width:"40%",marginLeft:"30%",marginTop:"100px",
                border:"#a3a375", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                <Typography variant="h6" style={{textAlign:"center", marginBottom:"35px"}} gutterBottom>
                    Teacher Details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            value={this.state.teachers.empNum}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="fullName"
                            value={this.state.teachers.fullName}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="gender"
                            value={this.state.teachers.gender}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="fullName"
                            value={this.state.teachers.qualification}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="qualification"
                            value={String(this.state.teachers.sectionalHead)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="sectionalHead"
                            value={this.state.teachers.section}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="section"
                            value={this.state.teachers.selectedGrades}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="subject"
                            value={this.state.teachers.subject}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{marginTop:"15px",width:"100%"}}
                            onClick={() => this.deleteTeacher(this.state.teachers._id)}
                        >
                            Delete
                        </Button>
                    </Grid>

                </Grid>
            </div>
        );
    }
}


export default AddTeacher;