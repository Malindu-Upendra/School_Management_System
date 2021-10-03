import React from "react";
import {Table,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {Space} from "antd";
import Search from "antd/es/input/Search";

export class ComponentToPrint extends React.PureComponent {
    state = {
        classroom:[],
        Grades:[{grade:'1'},{grade:'2'},{grade:'3'},{grade:'4'},{grade:'5'},{grade:'6'},{grade:'7'},{grade:'8'},{grade:'9'},{grade:'10'}]
    }

    componentDidMount() {
        axios.get('http://localhost:5000/classroom/allctables').
        then(res=>{
            const table = res.data.timetables;
            this.setState({classroom:table});
        }).catch(err=> err.message)
    }


    render() {

        return (

            <div>
            <h3 style={{textAlign:'center',marginTop:'20px'}}>ClassRoom Timetables</h3>
            <Container style={{width: "100%", border: "2px solid", marginTop: "2%", padding: "1%",borderColor:"lightBlue"}}>

                <div style={{width:"40%",marginLeft:"60%",marginBottom:"2%"}}>
                    <Space direction="vertical" style={{width:"100%"}}>
                        <Search
                            placeholder="Search by Grade"
                            onSearch={this.onSearch}
                            style={{width:"100%"}}
                            enterButton
                        />
                    </Space>
                </div>

                {this.state.Grades.map((g) => (
                <Table bordered responsive style={{border: "1px solid",borderColor:"lightBlue"}}>
                    <thead>
                    <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "whiteSpace",borderColor:"lightBlue"}}>

                        <td colSpan={7}>Grade {g.grade}</td>

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
                            {ttable.grade===g.grade &&
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
                                 }
                        </>
                    ))}
                </Table>
                ))}
            </Container>
            </div>
        )
    }

}


