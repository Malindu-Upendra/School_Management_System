import {Component} from "react";
import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Zoom from '@material-ui/core/Zoom';
import axios from "axios";
import decode from "jwt-decode";

class Profile extends Component{

    state = {
        transition : true,
        attendanceDate:'',
        userID:'',
        studentDetails:'',
        decision:false,
        grades:[],
        term:'1'
    }

    componentDidMount = async () => {
        if(sessionStorage.token) {
            await this.setState({userID:decode(sessionStorage.token).username});

            await axios.get(`http://localhost:5000/student/getStudentDetails/${this.state.userID}`).then(res => {
                    if(res.data.success){
                        this.setState({studentDetails:res.data.data})
                    }
            })

            await axios.get(`http://localhost:5000/student/getAttendance/${this.state.userID}`).then(res => {
                this.setState({decision:res.data.result})
            })

            await axios.get(`http://localhost:5000/student/getGrades/${this.state.userID}/${this.state.studentDetails.grade}`).then(res => {
                if(res.data.success) {
                    this.setState({grades: res.data.data})
                }})
        }

    }

    markAttendance = async (event) => {
        event.preventDefault();

        const date = new Date();
        await this.setState({attendanceDate:date.getDate()+ "/" +(date.getMonth()+1)+ "/" +date.getFullYear()})

        const attendance = {
            username:this.state.studentDetails.administrationNum,
            name:this.state.studentDetails.name,
            attendanceDate:this.state.attendanceDate,
            grade:this.state.studentDetails.grade
        }

        axios.post('http://localhost:5000/student/markAttendance',attendance).then(res => {
            if(res.data.success){
                alert("successfully attendance marked");
                window.location.reload(false);
            }
        })
    }

    handleTerm = (term) => {
        this.setState({term:term})
    }

    render() {
        return(
            <div style={{marginTop:"40px"}}>
                <h3 style={{textAlign:"center",marginBottom:"30px"}}>Student Profile</h3>
                <Container style={{boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)",backgroundColor:'white'}}>
                    <Row style={{margin:"auto"}} xs={1} md={2}>
                        <Zoom in={this.state.transition}>
                            <div className="container" style={{height:"623px",overflowY:"scroll",border:'1px solid'}}>
                                <Form >
                                    <h4 style={{textAlign:"center"}}>Grades</h4>
                                    <ButtonGroup aria-label="Basic example" style={{width:"100%"}}>
                                        <Button variant="secondary" onClick={this.handleTerm.bind(this,'1')}>Term 01</Button>
                                        <Button variant="secondary" onClick={this.handleTerm.bind(this,'2')}>Term 02</Button>
                                        <Button variant="secondary" onClick={this.handleTerm.bind(this,'3')}>Term 03</Button>
                                    </ButtonGroup>
                                    {this.state.grades.map((item) => (
                                        item.grades.map((grade) => (
                                            <>
                                            {this.state.term === item.term &&
                                                <Form.Group>
                                                    <Form.Label>{grade.subject}</Form.Label>
                                                    <Form.Control type="text" value={grade.result} readOnly />
                                                </Form.Group>
                                            }
                                            </>
                                        ))
                                    ))}
                                </Form>
                            </div>
                        </Zoom>
                        <Zoom in={this.state.transition} style={{ transitionDelay: this.state.transition ? '500ms' : '0ms' }}>
                            <Form style={{border:'1px solid'}}>
                                <h4 style={{textAlign:"center"}}>Details</h4>
                                <Form.Group>
                                    <Form.Label>Administration Number</Form.Label>
                                    <Form.Control type="text" value={this.state.studentDetails.administrationNum} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={this.state.studentDetails.name} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={this.state.studentDetails.email} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="text" value={this.state.studentDetails.password} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Grade</Form.Label>
                                    <Form.Control type="text" value={this.state.studentDetails.grade} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="text" value={this.state.studentDetails.age} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control type="text" value={this.state.studentDetails.birthday} readOnly />
                                </Form.Group>
                            </Form>
                        </Zoom>
                    </Row>
                    {this.state.decision ?
                        <div style={{width:"100%",height:"200px",marginTop:"30px",backgroundColor:'#0086b3'}}>
                            <h3 style={{padding:'60px',textAlign:'center'}}>Your Attendance Marked For The Day. Thank You!</h3>
                        </div>
                        :
                    <Row>
                        <Button style={{width:"100%",height:"200px",marginTop:"30px"}} onClick={this.markAttendance} variant="outline-success"><h3>Mark Attendance</h3></Button>
                    </Row>
                    }
                </Container>
            </div>
        )
    }

}

export default Profile
