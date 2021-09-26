import React , {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Search from "antd/es/input/Search";
import {Divider, Space} from "antd";
import axios from "axios";

class StudentGradeTable extends Component{

    state = {
        data:[],
        subject:'',
        term:'1',
        grade:''
    }

    componentDidMount = async () => {
        const subject = this.props.match.params.subject;
        const grade = this.props.match.params.grade;

        this.setState({grade:grade})
        this.setState({subject:subject})

        await axios.get(`http://localhost:5000/teacher/getSpecificGrades/${grade}/${subject}`).then(res => {
            if(res.data.success){
                this.setState({data:res.data.data})
            }
        })

    }

    termHandler = async (term) => {
        this.setState({term:term})
    }

    render() {
    return(
        <>
            <Typography variant="h6" style={{textAlign:"center", marginTop: "50px", marginBottom: "20px"}} gutterBottom>
                Student List
            </Typography>
            <Space direction="vertical" style={{width:"100%",marginBottom:"20px"}}>
                <Search placeholder="Search by Registration Number" onSearch={this.onSearch} style={{width:"50%", marginLeft:"25%"}} enterButton />
            </Space>
            <div
                style={{
                    backgroundColor:"#d1e0e0",
                    width:"80%",
                    margin:"auto",
                    border:"black",
                    borderStyle:"solid",
                    borderWidth:"1px"}}
                className="site-button-ghost-wrapper">

                <Button
                    ghost
                    style={{width:"32%"}}
                    onClick={this.termHandler.bind(this,"1")}>
                    Term 01
                </Button>
                <Divider type="vertical"
                         style={{border:"#527a7a",
                             borderStyle:"solid",
                             borderWidth:"1px"}}
                />
                <Button
                    ghost
                    style={{width:"32%"}}
                    onClick={this.termHandler.bind(this,"2")}>
                    Term 02
                </Button>
                <Divider type="vertical"
                         style={{border:"#527a7a",
                             borderStyle:"solid",
                             borderWidth:"1px"}}
                />
                <Button
                    ghost
                    style={{width:"32%"}}
                    onClick={this.termHandler.bind(this,"3")}>
                    Term 03
                </Button>
            </div>
        <table className="table" style={{
            textAlign: "center",
            marginTop: "30px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            border: "1px solid teal",
            marginBottom: "200px"
        }}>
            <thead className="thead-dark">
            <tr style={{backgroundColor: "teal"}}>
                <th scope="col">Student No</th>
                <th scope="col">Student Name</th>
                <th scope="col">Grade</th>
                <th scope="col">Student Result</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {this.state.term === '1' ?
                <>
            {this.state.data.map((item) => (
            <tr>
                <td>{item.RegistrationNumber}</td>
                <td>{item.name}</td>
                <td>{this.state.grade}</td>
                {this.state.subject === 'Mathematics' ?
                    <td>{item.term1.Mathematics}</td>
                    : this.state.subject === 'Sinhala' ?
                        <td>{item.term1.Sinhala}</td>
                        : this.state.subject === 'Environment' ?
                            <td>{item.term1.Environment}</td>
                            : this.state.subject === 'English' ?
                                <td>{item.term1.English}</td>
                                : this.state.subject === 'Buddhism' ?
                                <td>{item.term1.Buddhism}</td>
                                    : this.state.subject === 'Science' ?
                                        <td>{item.term1.Science}</td>
                                        : this.state.subject === 'HealthStudies' ?
                                            <td>{item.term1.HealthStudies}</td>
                                            : this.state.subject === 'History' ?
                                                <td>{item.term1.History}</td>
                                                : this.state.subject === 'Geography' ?
                                                    <td>{item.term1.Geography}</td>
                                                    : this.state.subject === 'Civics' ?
                                                        <td>{item.term1.Civics}</td>
                                                        : this.state.subject === 'Art' ?
                                                            <td>{item.term1.Art}</td>
                                                            : this.state.subject === 'Tamil' ?
                                                                <td>{item.term1.Tamil}</td>
                                                                : this.state.subject === 'Islam' &&
                                                                <td>{item.term1.Islam}</td>
                }

                <td><Button onClick={()=> window.location.href='/admin/EditStudentResult'}>Edit Result</Button></td>
            </tr>
            ))}
                </>
            : this.state.term === '2' ?
                    <>
                        {this.state.data.map((item) => (
                            <tr>
                                <td>{item.RegistrationNumber}</td>
                                <td>{item.name}</td>
                                <td>{this.state.grade}</td>
                                {this.state.subject === 'Mathematics' ?
                                    <td>{item.term2.Mathematics}</td>
                                    : this.state.subject === 'Sinhala' ?
                                        <td>{item.term2.Sinhala}</td>
                                        : this.state.subject === 'Environment' ?
                                            <td>{item.term2.Environment}</td>
                                            : this.state.subject === 'English' ?
                                                <td>{item.term2.English}</td>
                                                : this.state.subject === 'Buddhism' ?
                                                    <td>{item.term2.Buddhism}</td>
                                                    : this.state.subject === 'Science' ?
                                                        <td>{item.term2.Science}</td>
                                                        : this.state.subject === 'HealthStudies' ?
                                                            <td>{item.term2.HealthStudies}</td>
                                                            : this.state.subject === 'History' ?
                                                                <td>{item.term2.History}</td>
                                                                : this.state.subject === 'Geography' ?
                                                                    <td>{item.term2.Geography}</td>
                                                                    : this.state.subject === 'Civics' ?
                                                                        <td>{item.term2.Civics}</td>
                                                                        : this.state.subject === 'Art' ?
                                                                            <td>{item.term2.Art}</td>
                                                                            : this.state.subject === 'Tamil' ?
                                                                                <td>{item.term2.Tamil}</td>
                                                                                : this.state.subject === 'Islam' &&
                                                                                <td>{item.term2.Islam}</td>
                                }

                                <td><Button onClick={()=> window.location.href='/admin/EditStudentResult'}>Edit Result</Button></td>
                            </tr>
                        ))}
                    </>
            : this.state.term === '3' &&
                        <>
                            {this.state.data.map((item) => (
                                <tr>
                                    <td>{item.RegistrationNumber}</td>
                                    <td>{item.name}</td>
                                    <td>{this.state.grade}</td>
                                    {this.state.subject === 'Mathematics' ?
                                        <td>{item.term3.Mathematics}</td>
                                        : this.state.subject === 'Sinhala' ?
                                            <td>{item.term3.Sinhala}</td>
                                            : this.state.subject === 'Environment' ?
                                                <td>{item.term3.Environment}</td>
                                                : this.state.subject === 'English' ?
                                                    <td>{item.term3.English}</td>
                                                    : this.state.subject === 'Buddhism' ?
                                                        <td>{item.term3.Buddhism}</td>
                                                        : this.state.subject === 'Science' ?
                                                            <td>{item.term3.Science}</td>
                                                            : this.state.subject === 'HealthStudies' ?
                                                                <td>{item.term3.HealthStudies}</td>
                                                                : this.state.subject === 'History' ?
                                                                    <td>{item.term3.History}</td>
                                                                    : this.state.subject === 'Geography' ?
                                                                        <td>{item.term3.Geography}</td>
                                                                        : this.state.subject === 'Civics' ?
                                                                            <td>{item.term3.Civics}</td>
                                                                            : this.state.subject === 'Art' ?
                                                                                <td>{item.term3.Art}</td>
                                                                                : this.state.subject === 'Tamil' ?
                                                                                    <td>{item.term3.Tamil}</td>
                                                                                    : this.state.subject === 'Islam' &&
                                                                                    <td>{item.term3.Islam}</td>
                                    }

                                    <td><Button onClick={()=> window.location.href='/admin/EditStudentResult'}>Edit Result</Button></td>
                                </tr>
                            ))}
                        </>
            }
            </tbody>
        </table>
        </>
    )
}

}

export default StudentGradeTable;

