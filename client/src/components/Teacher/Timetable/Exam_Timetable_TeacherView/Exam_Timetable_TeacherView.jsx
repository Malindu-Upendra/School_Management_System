import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";
import {Button, Grid, TextField} from "@material-ui/core";
import AssessmentIcon from '@material-ui/icons/Assessment';
//import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import {Space} from "antd";
import Search from "antd/es/input/Search";
import decode from "jwt-decode";

export class Exam_Timetable_TeacherView extends Component {
    state = {
        exam:[],
        grades:[]

    }

    componentDidMount = async () => {
        await this.setState({username:decode(sessionStorage.token).username})

        await axios.get(`http://localhost:5000/teacher/getSpecificTeacher/${this.state.username}`).then(async res => {
            if (res.data.success) {
                await this.setState({grades:res.data.data.selectedGrades});
            }
        })

        await axios.get('http://localhost:5000/exam/getExamTimetable').
        then(res=>{
            const table = res.data.etimetable;
            this.setState({exam:table});
        }).catch(err=> err.message)
    }

    deleteExam = (id =>{
        axios.delete(`http://localhost:5000/exam/deleteExamTimetable/${id}`).
        then(res=>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false)
            }
        })
    })


    render() {

        return (


            <Container style={{width: "100%",  marginTop: "5%", padding: "1%"}}>
                <div style={{width:"40%",marginLeft:"60%",marginBottom:"2%"}}>
                    <Space direction="vertical" style={{width:"100%"}}>
                        <Search
                            placeholder="Search by Grade"
                            // value={filter}
                            onSearch={this.onSearch}
                            // onchange={searchText.bind(this)}
                            style={{width:"100%"}}
                            enterButton
                        />
                    </Space>
                </div>

                {this.state.grades.map((item) => (
                <Table bordered responsive style={{border: "1px solid"}}>
                    <thead>
                    <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "#282c34",color:"white"}}>

                        <td colSpan={6}>Grade {item} Exam Time Table</td>

                    </tr>

                    <tr style={{textAlign: "center"}}>

                        <th>Date</th>
                        <th>Exam Type</th>
                        <th>Time</th>
                        <th>Subject</th>
                        <th>Subject Code</th>
                    </tr>
                    </thead>
                    {this.state.exam.map(ttable => (
                        <>

                            {parseInt(ttable.grade)===item &&
                                        <>
                                            <tbody>

                                            <tr style={{textAlign: "center"}}>

                                                <td>{ttable.date}</td>
                                                <td>{ttable.examtype}</td>
                                                <td><
                                                    Table>
                                                    <tr>
                                                        <td>{ttable.starttime}</td>
                                                        <td>{ttable.endtime}</td>
                                                    </tr>
                                                </Table>
                                                </td>
                                                <td>{ttable.subjectname}</td>
                                                <td>{ttable.subjectcode}</td>
                                            </tr>
                                            </tbody>
                                            <tr>
                                                <td colSpan={7}> <Grid item xs={12} style={{marginBottom:"2%"}}>
                                                    {/*<Button*/}
                                                    {/*    size="large"*/}
                                                    {/*    color="primary"*/}
                                                    {/*    variant="contained"*/}
                                                    {/*    style={{marginLeft: "16%", width: "25%"}}*/}
                                                    {/*    onClick={this.handleUpdate.bind(this,ttable._id)}*/}
                                                    {/*    startIcon={*/}
                                                    {/*        <UpdateIcon/>}*/}
                                                    {/*>Update Timetable Row</Button>*/}

                                                    <Button
                                                        size="large"
                                                        color="secondary"
                                                        variant="contained"
                                                        style={{marginLeft: "15%", width: "25%"}}
                                                        onClick={this.deleteExam.bind(this,ttable._id)}
                                                        startIcon={
                                                            <DeleteIcon/>}
                                                    >Delete Timetable Row</Button>
                                                </Grid>
                                                </td>
                                            </tr>
                                </>
                                }
                        </>
                    ))}
                </Table>
                ))}

            </Container>



        )
    }

}

export default Exam_Timetable_TeacherView ;
