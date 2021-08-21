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

class MathematicsTeachersView extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        TeacherNotices:[],
        TeacherMaterials:[]
    }

    componentDidMount = async ()=> {
        await  axios.get('http://localhost:5000/teacher/getSubjectNotices').
        then(res => {
            const  TeacherNotices = res.data;
            console.log("Damn" + TeacherNotices);
            this.setState({TeacherNotices: TeacherNotices});
        }).catch(err => err.message)

        await axios.get('http://localhost:5000/teacher/getSubjectMaterials').
        then(res => {
            const  TeacherMaterials = res.data;
            console.log("Bull" + TeacherMaterials);
            this.setState({TeacherMaterials: TeacherMaterials});
        }).catch(err => err.message)
    }

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
                    {/***********************************Notice box ********************************/}
                    {/*{this.state.Notices.map((Notices) => (*/}
                    <div style={{width:"80%",marginLeft:"10%",marginTop:"50px",
                        border:"#ff3333", borderWidth:"3px", borderStyle:"solid", padding:"2%",
                        boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                        <Typography variant="h6" style={{textAlign:"Center", textDecorationLine: 'underline', color:'#ff3333'}} gutterBottom>
                            Notices to All Students
                            {/*{Notices.noticeHeading}*/}
                        </Typography>

                        <Typography variant="subtitle1" gutterBottom>
                            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            {/*{Notices.noticeDetails}*/}
                        </Typography>
                        <Row>
                            <Col>
                        <Button
                            variant="contained"
                            color="secondary"
                            // className={classes.button}
                            startIcon={<DeleteIcon />}
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
                    {/*))}*/}
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
                        <Card
                            type="inner"
                            title="Week 01"
                            style={{border:"#527a7a",
                                borderStyle:"solid",
                                borderWidth:"1px"}}
                        >
                            <Divider
                                orientation="left"
                                style={{fontSize:"22px"}}
                            >
                                This week Lesson Fraction
                            </Divider>

                            <Typography variant="h6" style={{textAlign:"left"}} gutterBottom>
                                <PictureAsPdfIcon/>
                                {" "}
                                Lecture Material
                            </Typography>

                            <Typography variant="h6" style={{textAlign:"left"}} gutterBottom>
                                <PlayCircleOutlineIcon/>
                                {" "}
                                Lecture Link
                            </Typography>

                            <Row>
                                <Col>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        // className={classes.button}
                                        startIcon={<DeleteIcon />}
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
                        <Card
                            type="inner"
                            title="Week 02"
                            style={{border:"#527a7a",
                                borderStyle:"solid",
                                borderWidth:"1px",
                                marginTop: 16
                            }}

                        >
                            <Divider
                                orientation="left"
                                style={{fontSize:"22px"}}
                            >
                                This week Lesson Algebra
                            </Divider>

                            <Typography variant="h6" style={{textAlign:"left"}} gutterBottom>
                                <PictureAsPdfIcon/>
                                {" "}
                                Lecture Material
                            </Typography>

                            <Typography variant="h6" style={{textAlign:"left"}} gutterBottom>
                                <PlayCircleOutlineIcon/>
                                {" "}
                                Lecture Link
                            </Typography>

                            <Row>
                                <Col>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        // className={classes.button}
                                        startIcon={<DeleteIcon />}
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
                    </Card>

                </div>
            </>
        )
    }
}

export default MathematicsTeachersView;