import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";

export class ClassroomTimetableStudentView extends Component {
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



    render() {

        return (



            <Container style={{width: "100%", border: "2px solid", marginTop: "10%", padding: "1%",borderColor:"lightBlue"}}>

                <Table bordered responsive style={{border: "1px solid",borderColor:"lightBlue"}}>
                    <thead>
                    <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "whiteSpace",borderColor:"lightBlue"}}>

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
                            {ttable.grade==='Grade-06'?
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
                                :null }
                        </>
                    ))}
                </Table>

            </Container>



        )
    }

}

export default ClassroomTimetableStudentView;