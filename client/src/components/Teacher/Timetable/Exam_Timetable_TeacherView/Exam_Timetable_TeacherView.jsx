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

export class Exam_Timetable_TeacherView extends Component {
    state = {
        exam:[],


    }

    componentDidMount() {
        axios.get('http://localhost:5000/exam/getExamTimetable').
        then(res=>{
            const table = res.data.etimetable;
            console.log(table);
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
                <div style={{width:"40%",marginLeft:"50%",marginBottom:"2%"}}>
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


                <Table bordered responsive style={{border: "1px solid"}}>
                    <thead>
                    <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "#282c34",color:"white"}}>

                        <td colSpan={6}>Grade-06 1st Term</td>

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

                            {ttable.grade==='Grade-06'?
                                <>
                                    {ttable.term==='1st Term'?
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
                                        :null }
                                </>
                                :null}
                        </>
                    ))}
                </Table>

                <Table bordered responsive style={{border: "1px solid"}}>
                    <thead>
                    <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "#282c34",color:"white"}}>

                        <td colSpan={6}>Grade-07 1st Term</td>

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

                            {ttable.grade==='Grade-07'?
                                <>
                                    {ttable.term==='1st Term'?
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
                                        </>
                                        :null }
                                </>
                                :null}
                        </>
                    ))}
                </Table>

            </Container>



        )
    }

}

export default Exam_Timetable_TeacherView ;