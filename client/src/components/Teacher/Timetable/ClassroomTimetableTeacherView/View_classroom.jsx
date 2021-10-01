import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";
import {Button, Grid, TextField} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';

export class View_classroom extends Component {
    state = {
        classroom:[],


    }

    componentDidMount() {
        axios.get('http://localhost:5000/classroom/allctables').
        then(res=>{
            const table = res.data.timetables;
            console.log(table);
            this.setState({classroom:table});
        }).catch(err=> err.message)
    }

    deleteClassroom = (id =>{
        axios.delete(`http://localhost:5000/classroom/deletecTable/${id}`).
        then(res=>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false)
            }
        })
    })

    handleUpdate = (id) => {
        console.log(id)
        window.location = `/teacher/classroom_timetable/TimetableUpdateForm/${id}`
    }

    render() {

        return (



            <Container style={{width: "100%", border: "2px solid", marginTop: "3%", padding: "1%"}}>

                <Table bordered responsive style={{border: "1px solid",}}>
                    <thead>
                    <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "#282c34",color:"white"}}>

                        <td colSpan={7}>Grade-06</td>

                    </tr>

                    <tr style={{textAlign: "center"}}>

                        <th>Day</th>
                        <th>Time</th>
                        <th>Teacher Incharge</th>
                        <th>Subject</th>
                        <th>Subject Code</th>
                        <th>link</th>
                    </tr>
                    </thead>
                    {this.state.classroom.map(ttable => (
                        <>
                            <tbody>

                            <tr style={{textAlign: "center"}}>

                                <td>{ttable.day}</td>
                                <td>{ttable.time}</td>
                                <td><Table>
                                    <tr>
                                        <td>{ttable.title}</td>
                                        <td>{ttable.teacher}</td>
                                    </tr>
                                </Table></td>
                                <td>{ttable.subjectname}</td>
                                <td>{ttable.subjectcode}</td>
                                <td>{ttable.link}</td>

                            </tr>

                            </tbody>
                            <tr>
                                <td colSpan={7}> <Grid item xs={12} style={{marginBottom:"2%"}}>
                                    <Button
                                        size="large"
                                        color="primary"
                                        variant="contained"
                                        style={{marginLeft: "16%", width: "25%"}}
                                        onClick={this.handleUpdate.bind(this,ttable._id)}
                                        startIcon={
                                            <UpdateIcon/>}
                                    >Update Timetable Row</Button>

                                    <Button
                                        size="large"
                                        color="secondary"
                                        variant="contained"
                                        style={{marginLeft: "15%", width: "25%"}}
                                        onClick={this.deleteClassroom.bind(this,ttable._id)}
                                        startIcon={
                                            <DeleteIcon/>}
                                    >Delete Timetable Row</Button>
                                </Grid>
                                </td>
                            </tr>

                        </>
                    ))}
                </Table>
            </Container>



        )
    }

}

export default View_classroom;