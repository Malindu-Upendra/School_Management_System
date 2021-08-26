import React, {Component} from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from "axios";

    class EditStudentResult extends Component{

    // state = {
    //     teachers: ''
    // }


    // componentDidMount = () => {
    //     const id = this.props.match.params.id;
    //     console.log(id);
    //     axios.get(`http://localhost:5000/admin/getSpecificTeacher/${id}`)
    //         .then(response => {
    //             if(response.data.success){
    //                 this.setState({teachers:response.data.data})
    //             }
    //         })
    // }

    // deleteTeacher = async(id) => {
    //     try {
    //         if(window.confirm("Do you want to remove this teacher's details from the database")){
    //
    //             await axios.delete(`http://localhost:5000/admin/deleteTeacher/${id}`)
    //                 .then(res => {
    //                     if(res.data.success){
    //                         alert("Successfully Deleted");
    //                         this.props.history.push('/admin/DisplayTeacher')
    //                     }
    //                 })
    //         }
    //
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

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
                            // value={this.state.teachers.empNum}
                            fullWidth
                            value = "ST0001"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="fullName"
                            // value={this.state.teachers.fullName}
                            fullWidth
                            value = "Ahmed Ameer"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="gender"
                            // value={this.state.teachers.gender}
                            fullWidth
                            value = "5"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="gender"
                            // value={this.state.teachers.gender}
                            fullWidth
                            value = "Mathematics"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="gender"
                            // value={this.state.teachers.gender}
                            fullWidth
                            value="A"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{marginTop:"15px",width:"100%"}}
                            onClick={()=> window.location.href='/admin/StudentGradeTable'}
                        >
                            Update
                        </Button>
                    </Grid>

                </Grid>
            </div>
        );
    }
}


export default EditStudentResult;