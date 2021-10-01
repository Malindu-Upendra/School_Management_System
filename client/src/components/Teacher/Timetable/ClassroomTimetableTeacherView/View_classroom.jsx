import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Container} from "react-bootstrap";
import axios from "axios";
import {Button, Grid, TextField} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import {Space} from "antd";
import Search from "antd/es/input/Search";
import decode from "jwt-decode";

export class View_classroom extends Component {
    state = {
        classroom:[],
        grades:[],
        username:'',
        search:false,
        searchedGrade:[],
        searchedItem:''
    }

    componentDidMount = async () => {
        await this.setState({username:decode(sessionStorage.token).username})

        await axios.get(`http://localhost:5000/teacher/getSpecificTeacher/${this.state.username}`).then(async res => {
            if (res.data.success) {
                await this.setState({grades:res.data.data.selectedGrades});
            }
        })

        await axios.get('http://localhost:5000/classroom/allctables').
        then(res=>{
            const table = res.data.timetables;
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

    onSearch = async (value) => {
        await this.setState({searchedGrade:[]})
        this.setState({search:false})

        if(value !== '') {
            this.state.classroom.map(async (item) => {
                if (value === item.grade) {
                    this.setState({searchedItem: value})
                    await this.state.searchedGrade.push(item)
                    this.setState({search: true})
                }
            })
        }
    }

    render() {

        return (



            <Container style={{width: "100%", border: "2px solid", marginTop: "3%", padding: "1%"}}>

                <div style={{width:"40%",marginLeft:"60%"}}>
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
                {this.state.search ?

                    <>
                            <Table bordered responsive style={{border: "1px solid",marginTop:"2%"}}>
                                <thead>
                                <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "#282c34",color:"white"}}>

                                    <td colSpan={7}>Grade {this.state.searchedItem}</td>

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
                                {this.state.searchedGrade.map(ttable => (
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

                    </>

                    :

                    <>

                {this.state.grades.map((item) => (

                    <Table bordered responsive style={{border: "1px solid",marginTop:"2%"}}>
                    <thead>
                    <tr style={{border: "1px solid", textAlign: "center", backgroundColor: "#282c34",color:"white"}}>

                    <td colSpan={7}>Grade {item}</td>

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
                {item === parseInt(ttable.grade) &&
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
                }
                    </>
                    ))}
                    </Table>
                    ))}

                    </>
                }
            </Container>



        )
    }

}

export default View_classroom;
