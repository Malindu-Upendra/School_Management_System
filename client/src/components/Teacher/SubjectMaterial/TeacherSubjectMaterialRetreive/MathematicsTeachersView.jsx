import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import {Card, Divider, Space} from "antd";
import Search from "antd/es/input/Search";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class MathematicsTeachersView extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        TeacherNotices:[],
        TeacherMaterials:[],
        open:false
    }

    componentDidMount = async () => {
        await  axios.get('http://localhost:5000/teacher/getSubjectNotices').
        then(res => {
            const  TeacherNotices = res.data.data;
            console.log("Damn" + res.data.data);
            this.setState({TeacherNotices: TeacherNotices});
        }).catch(err => err.message)

        await axios.get('http://localhost:5000/teacher/getSubjectMaterials').
        then(res => {
            const  TeacherMaterials = res.data.data;
            console.log("Bull" + TeacherMaterials);
            this.setState({TeacherMaterials: TeacherMaterials});
        }).catch(err => err.message)
    }

    handleNoticeDelete = (id) => {
        axios.delete(`http://localhost:5000/teacher/deleteSubjectNotices/${id}`)
        .then(async response => {
                if(response.data.success){
                    this.setState({open:true});
                    await setTimeout(() => {
                        this.setState({open:false});
                    }, 5000);
                    await setTimeout(() => {
                        window.location.reload(false);
                    }, 2000);
                }
            })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })
        }

    handleMaterialDelete = (id) => {
        axios.delete(`http://localhost:5000/teacher/deleteSubjectMaterials/${id}`)
        .then(async response => {
                if(response.data.success){
                    this.setState({open:true});
                    await setTimeout(() => {
                        this.setState({open:false});
                    }, 5000);
                    await setTimeout(() => {
                        window.location.reload(false);
                    }, 2000);
                }
            })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })
    }

    handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }
        this.setState({open:false});
    };

    render() {
        return(
            <>
                <div style={{marginLeft:"4%",marginTop:"80px"}}>
                    {/*******************display welcome and view search bar*********************/}
                    <div>
                        <Row>
                            <Col>
                                <Typography variant="h6" style={{textAlign:"left"}} gutterBottom>
                                    Welcome to Mathematics!
                                </Typography>
                            </Col>

                            <Col>
                                <div style={{width:"40%",marginLeft:"50%"}}>
                                    <Space direction="vertical" style={{width:"100%"}}>
                                        <Search
                                            placeholder="Search by lesson name"
                                            // onSearch={this.onSearch}
                                            style={{width:"100%"}}
                                            enterButton
                                        />
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/***********************************Notice box ********************************/}<>
                    {this.state.TeacherNotices.map((Notices) => (
                    <div style={{width:"80%",marginLeft:"10%",marginTop:"50px",
                        border:"#ff3333", borderWidth:"3px", borderStyle:"solid", padding:"2%",
                        boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                        <Typography variant="h6" style={{textAlign:"Center", textDecorationLine: 'underline', color:'#ff3333'}} gutterBottom>
                            {Notices.noticeHeading}
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            {Notices.noticeDetails}
                        </Typography>
                        <Row>
                            <Col>
                        <Button
                            variant="contained"
                            color="secondary"
                            // className={classes.button}
                            startIcon={<DeleteIcon />}
                            onClick={this.handleNoticeDelete.bind(this,Notices._id)}
                            style={{marginLeft:"60%",width:"30%"}}
                        >
                            Delete
                        </Button>
                            </Col>

                            <Col>
                                <Button
                                    variant="contained"
                                    color="default"
                                    // className={classes.button}
                                    startIcon={<BorderColorIcon />}
                                    style={{marginLeft:"10px",width:"30%",backgroundColor: "#282c34",color:"white"}}
                                >
                                    Edit
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    ))}
                </>
                    {/************************Insert Buttons**************************************/}
                    <div style={{marginTop:"30px"}}>
                        <Row>
                            <Col>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    // className={classes.button}
                                    startIcon={<AddCircleOutlineIcon />}
                                    onClick={()=> window.location.href="/teacher/subjectMaterial/noticeInsertForm"}
                                    style={{marginLeft:"45%",width:"50%",backgroundColor: "#4080bf",color:"white"}}
                                >
                                   Insert Notices
                                </Button>
                            </Col>

                            <Col>
                                <Button
                                    variant="contained"
                                    color="default"
                                    // className={classes.button}
                                    startIcon={<AddCircleOutlineIcon />}
                                    onClick={()=> window.location.href="/teacher/subjectMaterial/subjectMaterialInsertForm"}
                                    style={{marginLeft:"10px",width:"50%", backgroundColor: "#008080",color:"white"}}
                                >
                                    Insert Subject Materials
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    {/***********************************Display Terms ********************************/}
                    <div
                        style={{marginTop:"25px",
                            backgroundColor:"#d1e0e0",
                            width:"90%",
                            marginLeft:"4%",
                            border:"black",
                            borderStyle:"solid",
                            borderWidth:"1px"}}
                        className="site-button-ghost-wrapper">

                        <Button
                            ghost
                            style={{width:"30%"}}>
                            Term 01
                        </Button>
                        <Divider type="vertical"
                                 style={{border:"#527a7a",
                                     borderStyle:"solid",
                                     borderWidth:"1px"}}
                        />
                        <Button
                            ghost
                            style={{width:"30%"}}>
                            Term 02
                        </Button>
                        <Divider type="vertical"
                                 style={{border:"#527a7a",
                                     borderStyle:"solid",
                                     borderWidth:"1px"}}
                        />
                        <Button
                            ghost
                            style={{width:"30%"}}>
                            Term 03
                        </Button>
                    </div>

                    {/***********************************Display Materials ********************************/}
                    <Card title="Term 01"
                          style={{marginTop:"40px",
                              width:"97%",
                              border:"black",
                              borderStyle:"solid",
                              borderWidth:"1px"}}>

                        {this.state.TeacherMaterials.map((Materials) => (
                            <>
                        <Card
                            type="inner"
                            title=   {Materials.week}
                            style={{border:"#527a7a",
                                borderStyle:"solid",
                                borderWidth:"1px",
                                padding:"2%"
                            }}
                        >
                            <Divider
                                orientation="left"
                                style={{fontSize:"22px"}}
                            >
                                {Materials.unitName}
                            </Divider>

                            <Typography variant="subtitle1" style={{textAlign:"left"}} gutterBottom>
                                <PictureAsPdfIcon/>
                                {" "}
                                Lecture Material
                            </Typography>

                            <Typography variant="subtitle1" style={{textAlign:"left"}} gutterBottom>
                                <PlayCircleOutlineIcon/>
                                {" "}
                                {Materials.lectureLink}
                            </Typography>
                            <p></p>
                            <Row>
                                <Col>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        // className={classes.button}
                                        startIcon={<DeleteIcon />}
                                        onClick={this.handleMaterialDelete.bind(this,Materials._id)}
                                        style={{marginLeft:"60%",width:"30%"}}
                                    >
                                        Delete
                                    </Button>
                                </Col>

                                <Col>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        // className={classes.button}
                                        startIcon={<BorderColorIcon />}
                                        style={{marginLeft:"10px",width:"30%",backgroundColor: "#282c34",color:"white"}}
                                    >
                                        Edit
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                            <Divider style={{border:"#527a7a",
                            borderStyle:"solid",
                            borderWidth:"1px"}}
                            />
                            </>
                        ))}
                    </Card>
                    <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity="success">
                            Successfully Deleted!
                        </Alert>
                    </Snackbar>
                </div>
            </>
        )
    }
}

export default MathematicsTeachersView;