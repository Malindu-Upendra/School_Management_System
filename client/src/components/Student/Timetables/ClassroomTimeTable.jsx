import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";
import {Space} from "antd";
import Search from "antd/es/input/Search";

export class ClassroomTimeTable extends Component {
    state = {
        classroom:[],
        grade:''
    }

    componentDidMount = () => {
        const grade = this.props.match.params.grade;
        this.setState({grade:grade})

        axios.get(`http://localhost:5000/student/getSpecificClassRoomTimeTable/${grade}`).
        then(res=>{
            const table = res.data.timetable;
            this.setState({classroom:table});
        }).catch(err=> err.message)
    }


    render() {

        return (

            <>
                <h3 style={{textAlign:'center',marginTop:'20px'}}>ClassRoom Timetable</h3>
                <Container style={{width: "100%", border: "2px solid", marginTop: "2%", padding: "1%",borderColor:"lightBlue"}}>

                        <Table bordered responsive style={{border: "1px solid",borderColor:"lightBlue"}}>
                            <thead>
                            <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "whiteSpace",borderColor:"lightBlue"}}>

                                <td colSpan={7}>Grade {this.state.grade}</td>

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
                                </>
                            ))}
                        </Table>
                </Container>
            </>
        )
    }

}

export default ClassroomTimeTable;
