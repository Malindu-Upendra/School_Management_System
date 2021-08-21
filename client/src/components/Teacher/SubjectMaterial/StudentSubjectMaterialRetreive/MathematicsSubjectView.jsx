import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import {Card, Divider, Space} from "antd";
import Search from "antd/es/input/Search";
import {Row,Col} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import axios from "axios";

class MathematicsSubjectView extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        Notices:[],
        Materials:[]
    }

    componentDidMount = async ()=> {
      await  axios.get('http://localhost:5000/teacher/getSubjectNotices').
        then(res => {
            const  Notices = res.data;
            console.log("Damn" + Notices);
            this.setState({Notices: Notices});
        }).catch(err => err.message)

        await axios.get('http://localhost:5000/teacher/getSubjectMaterials').
        then(res => {
            const  Materials = res.data;
            console.log("Bull" + Materials);
            this.setState({Materials: Materials});
        }).catch(err => err.message)
    }

    render() {
        return(
            <>
                <div style={{marginLeft:"4%",marginTop:"70px"}}>
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
                    <div>
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

                        </div>
                                {/*))}*/}
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
                          style={{marginTop:"30px",
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
                        </Card>
                    </Card>
                </div>
            </>
        )
    }
}

export default MathematicsSubjectView;