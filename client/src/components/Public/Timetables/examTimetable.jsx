import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";
import {Button, Grid, TextField} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {Space} from "antd";
import Search from "antd/es/input/Search";
import decode from "jwt-decode";

export class ExamTimetable extends Component {
    state = {
        exam:[],
        grades:[{grade:'1'},{grade:'2'},{grade:'3'},{grade:'4'},{grade:'5'},{grade:'6'},{grade:'7'},{grade:'8'},{grade:'9'},{grade:'10'}]

    }

    componentDidMount = async () => {

        await axios.get('http://localhost:5000/exam/getExamTimetable').then(res => {
            const table = res.data.etimetable;
            this.setState({exam: table});
        }).catch(err => err.message)
    }


    render() {

        return (
            <>
            <h3 style={{textAlign:'center',marginTop:'20px'}}>Exam Timetables</h3>
            <Container style={{width: "100%",  marginTop: "2%", padding: "1%"}}>
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

                            <td colSpan={6}>Grade {item.grade}</td>

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

                                {ttable.grade === item.grade &&
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
                                }
                            </>
                        ))}
                    </Table>
                ))}

            </Container>
            </>


        )
    }

}

export default ExamTimetable ;
