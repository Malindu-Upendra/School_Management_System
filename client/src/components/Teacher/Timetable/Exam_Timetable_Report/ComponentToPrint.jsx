import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";

export class ComponentToPrint  extends React.PureComponent{

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


    render() {
        return(
            <Container style={{width: "100%",  marginTop: "10%", padding: "1%"}}>
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
