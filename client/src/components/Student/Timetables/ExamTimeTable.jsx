import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";
import {Space} from "antd";
import Search from "antd/es/input/Search";

export class ExamTimetable extends Component {
    state = {
        exam:[],
        grade:''
    }

    componentDidMount = async () => {
        const grade = this.props.match.params.grade;
        this.setState({grade:grade})

        await axios.get(`http://localhost:5000/student/getSpecificExamTimetable/${grade}`).then(res => {
            const table = res.data.timetable;
            this.setState({exam: table});
        }).catch(err => err.message)
    }


    render() {

        return (
            <>
                <h3 style={{textAlign:'center',marginTop:'20px'}}>Exam Timetables</h3>
                <Container style={{width: "100%",  marginTop: "2%", padding: "1%"}}>

                        <Table bordered responsive style={{border: "1px solid"}}>
                            <thead>
                            <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "#282c34",color:"white"}}>

                                <td colSpan={6}>Grade {this.state.grade}</td>

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
                            ))}
                        </Table>
                    ))}

                </Container>
            </>


        )
    }

}

export default ExamTimetable ;
