import React , {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Search from "antd/es/input/Search";
import {Divider, Space} from "antd";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import {Box, Fade, TextField} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

class StudentGradeTable extends Component {

    state = {
        data: [],
        subject: '',
        term: '1',
        grade: '',
        open: false,
        student: '',
        result: '',
        updated: false,
        isModalVisible:false,
        selectedStudent:''
    }

    componentDidMount = async () => {
        const subject = this.props.match.params.subject;
        const grade = this.props.match.params.grade;

        this.setState({grade: grade})
        this.setState({subject: subject})

        await axios.get(`http://localhost:5000/teacher/getSpecificGrades/${grade}/${subject}`).then(res => {
            if (res.data.success) {
                this.setState({data: res.data.data})
                
            }
        })

    }

    onSearch =  (item) => {
         this.state.data.forEach(async(detail, index) => {

            if (item === detail.RegistrationNumber) {
                await this.setState({student:detail});
                this.setState({open:true});

            }
        })
        console.log(this.state.student);
    }

    termHandler = async (term) => {
        this.setState({term: term})
    }

    handleTermOne = (student) => {
        this.setState({open: true})
        this.setState({student: student})
    }

    handleTermTwo = (student) => {
        this.setState({open: true})
        this.setState({student: student})
    }

    handleTermThree = (student) => {
        this.setState({open: true})
        this.setState({student: student})
    }

    handleClose = () => {
        this.setState({open: false})
        this.setState({result: ''})
    }

    handleResult = (event) => {
        this.setState({result: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const sendingData = {
            _id: this.state.student._id,
            term: this.state.term,
            result: this.state.result,
            subject: this.state.subject,
            grade: this.state.grade
        }

        if (this.state.term === '1') {
            axios.put('http://localhost:5000/teacher/updateGrades/term1', sendingData).then(async res => {
                if (res.data.success) {
                    this.setState({updated:true})
                    await setTimeout(async () => {
                        window.location.reload(false)
                    },2000)
                }
            })
        } else if (this.state.term === '2') {
            axios.put('http://localhost:5000/teacher/updateGrades/term2', sendingData).then(async res => {
                if (res.data.success) {
                    this.setState({updated:true})
                    await setTimeout(async () => {
                        window.location.reload(false)
                    },2000)
                }
            })
        } else {
            axios.put('http://localhost:5000/teacher/updateGrades/term3', sendingData).then(async res => {
                if (res.data.success) {
                    this.setState({updated:true})
                    await setTimeout(async () => {
                        window.location.reload(false)
                    },2000)
                }
            })
        }
    }

    render() {
        return (
            <>
                <Typography variant="h6" style={{textAlign: "center", marginTop: "50px", marginBottom: "20px"}} gutterBottom>
                    Student List
                </Typography>
                <Space direction="vertical" style={{width: "100%", marginBottom: "20px"}}>
                    <Search placeholder="Search by Registration Number" onSearch={this.onSearch}
                            style={{width: "50%", marginLeft: "25%"}} enterButton/>
                </Space>
                <div
                    style={{
                        backgroundColor: "#d1e0e0",
                        width: "80%",
                        margin: "auto",
                        border: "black",
                        borderStyle: "solid",
                        borderWidth: "1px"
                    }}
                    className="site-button-ghost-wrapper">

                    <Button
                        ghost
                        style={{width: "32%"}}
                        onClick={this.termHandler.bind(this, "1")}>
                        Term 01
                    </Button>
                    <Divider type="vertical"
                             style={{
                                 border: "#527a7a",
                                 borderStyle: "solid",
                                 borderWidth: "1px"
                             }}
                    />
                    <Button
                        ghost
                        style={{width: "32%"}}
                        onClick={this.termHandler.bind(this, "2")}>
                        Term 02
                    </Button>
                    <Divider type="vertical"
                             style={{
                                 border: "#527a7a",
                                 borderStyle: "solid",
                                 borderWidth: "1px"
                             }}
                    />
                    <Button
                        ghost
                        style={{width: "32%"}}
                        onClick={this.termHandler.bind(this, "3")}>
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
                        <th scope="col">Term</th>
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
                                    <td>{this.state.term}</td>
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

                                    <td><Button onClick={this.handleTermOne.bind(this, item)}>Edit Result</Button></td>
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
                                        <td>{this.state.term}</td>
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

                                        <td><Button onClick={this.handleTermTwo.bind(this, item)}>Edit Result</Button>
                                        </td>
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
                                        <td>{this.state.term}</td>
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

                                        <td><Button onClick={this.handleTermThree.bind(this, item)}>Edit Result</Button>
                                        </td>
                                    </tr>
                                ))}
                            </>
                    }
                    </tbody>
                </table>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    {this.state.updated ?
                        <div style={{width: '26%',height:'200px', backgroundColor: 'white', margin: 'auto',padding:'20px', textAlign: 'center',marginTop:'200px',border:'1px solid black'}}>
                            <box sx={style}>
                                <CheckBoxTwoToneIcon style={{fontSize:'100px',color:'green'}}/>
                                <h3 style={{color:'green'}}>Successfully Updated !</h3>
                            </box>
                        </div> :
                        <Fade in={this.state.open}>
                            <Box sx={style}>
                                <Typography id="transition-modal-title"
                                            style={{backgroundColor: "#00ace6    ", textAlign: "center"}} variant="h6"
                                            component="h2">
                                    Grade Insertion
                                </Typography>
                                <TextField id="standard-basic" fullWidth label="Student Number" variant="standard"
                                           InputProps={{
                                               readOnly: true,
                                           }} defaultValue={this.state.student.RegistrationNumber}/>
                                <TextField id="standard-basic" fullWidth label="Student name" InputProps={{
                                    readOnly: true,
                                }} variant="standard" defaultValue={this.state.student.name}/>
                                <TextField id="standard-basic" fullWidth label="Term" InputProps={{
                                    readOnly: true,
                                }} variant="standard" defaultValue={this.state.term}/>
                                <TextField id="standard-basic" fullWidth label="Grade" value={this.state.result}
                                           onChange={this.handleResult} variant="standard"/>
                                <Button variant="contained" fullWidth onClick={this.handleSubmit}
                                        style={{marginTop: "20px"}}>Insert</Button>
                            </Box>
                        </Fade>
                    }
                </Modal>
            </>
        )
    }

}

export default StudentGradeTable;

