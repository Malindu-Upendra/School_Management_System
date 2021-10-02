import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import {Card, Divider, Modal, Space} from "antd";
import Search from "antd/es/input/Search";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PictureAsPdfIcon from "@material-ui/icons/InsertDriveFile";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { FilePdfOutlined } from '@ant-design/icons';
import {Document, Page, PDFViewer, StyleSheet, Text, View} from "@react-pdf/renderer";


function AlertMessage(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SubjectMaterialTeachersView extends Component {
    state = {
        TeacherNotices: [],
        TeacherMaterials: [],
        open: false,
        term: '1',
        subject: '',
        grade: 0,
        Search: "",
        isModalVisible: false,
        visible: false,
        terms: [{id: '1'}, {id: '2'}, {id: '3'}],
        search: false,
        searchedMaterial: '',
        empty: false,
        openNull: false,
        openMismatch: false,
        mismatch: false
    }

    componentDidMount = async () => {
        const subject = this.props.match.params.subject;
        const grade = this.props.match.params.grade;
        this.setState({grade: grade})
        this.setState({subject: subject})

        await axios.get(`http://localhost:5000/teacher/getSubjectNotices/${subject}/${grade}`).then(res => {
            const TeacherNotices = res.data.data;
            this.setState({TeacherNotices: TeacherNotices});
        }).catch(err => err.message)

        await axios.get(`http://localhost:5000/teacher/getSubjectMaterials/${subject}/${grade}`).then(res => {
            const TeacherMaterials = res.data.data;
            this.setState({TeacherMaterials: TeacherMaterials});
        }).catch(err => err.message)

    }

    handleNoticeDelete = (id) => {
        axios.delete(`http://localhost:5000/teacher/deleteSubjectNotices/${id}`)
            .then(async response => {
                if (response.data.success) {
                    this.setState({open: true});
                    await setTimeout(() => {
                        this.setState({open: false});
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
                if (response.data.success) {
                    this.setState({open: true});
                    await setTimeout(() => {
                        this.setState({open: false});
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

    handleEdit = (id) => {
        window.location = `/teacher/subjectMaterial/noticeUpdateForm/${id}`;
    }

    handleEditMaterials = (id) => {
        window.location = `/teacher/subjectMaterial/materialUpdateForm/${id}`;
    }

    handleClose = (event, reason) => {
        if (reason === 'clickAway') {
            return;
        }
        this.setState({open: false});
    };

    termHandler = async (term) => {
        this.setState({term: term})
        this.setState({search: false})
    }

    handleReportGeneration = () => {
        this.setState({visible: true})
    }

    handleCancel = () => {
        this.setState({visible: false})
    }


    onSearch = (value) => {
        let count = 0

        if (value !== '') {
            this.state.TeacherMaterials.map((item) => {
                if (value === item.unitName) {
                    this.setState({searchedMaterial: item})
                    this.setState({search: true})
                    count = count + 1
                }

            })

            if(count === 0){
                this.setState({openMismatch:true})
                this.setState({empty: true});
                setTimeout(() => {
                    this.setState({openMismatch:false})
                    this.setState({empty: false})
                    this.setState({search: false})
                }, 5000);
            }
        } else {
            this.setState({search: false})
            this.setState({empty: true});
            this.setState({openNull: true});
            setTimeout(() => {
                this.setState({openNull: false});
                this.setState({empty: false})
                this.setState({search: false})
            }, 5000);
        }


    }

    render() {

        return (
            <>
                <div style={{marginLeft: "4%", marginTop: "80px"}}>
                    {/*******************display welcome and view search bar*********************/}
                    <div>
                        <Row>
                            <Col>
                                <Typography variant="h6" style={{textAlign: "left"}} gutterBottom>
                                    Welcome to {this.state.subject}
                                </Typography>
                            </Col>

                            <Col>
                                <div style={{width: "40%", marginLeft: "50%"}}>
                                    <Space direction="vertical" style={{width: "100%"}}>
                                        <Search
                                            placeholder="Search by lesson name"
                                            // value={filter}
                                            onSearch={this.onSearch}
                                            // onchange={searchText.bind(this)}
                                            style={{width: "100%"}}
                                            enterButton
                                        />
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/***********************************Notice box ********************************/}
                    <>
                        {this.state.TeacherNotices.map((Notices) => (
                            <>
                                {/*{Notices.subjectSelect==='Mathematics' ?*/}
                                <div style={{
                                    width: "80%", marginLeft: "10%", marginTop: "51px",
                                    border: "#ff3333", borderWidth: "3px", borderStyle: "solid", padding: "2%",
                                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"
                                }}>

                                    <Typography variant="h6" style={{
                                        textAlign: "Center",
                                        textDecorationLine: 'underline',
                                        color: '#ff3333'
                                    }} gutterBottom>
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
                                                startIcon={<DeleteIcon/>}
                                                onClick={this.handleNoticeDelete.bind(this, Notices._id)}
                                                style={{marginLeft: "60%", width: "30%"}}
                                            >
                                                Delete
                                            </Button>
                                        </Col>

                                        <Col>
                                            <Button
                                                variant="contained"
                                                color="default"
                                                // className={classes.button}
                                                startIcon={<BorderColorIcon/>}
                                                // onClick={()=> window.location.href="/teacher/subjectMaterial/noticeUpdateForm"}
                                                onClick={this.handleEdit.bind(this, Notices._id)}
                                                style={{
                                                    marginLeft: "10px",
                                                    width: "30%",
                                                    backgroundColor: "#282c34",
                                                    color: "white"
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                                {/*: null }*/}
                            </>
                        ))}
                    </>
                    {/************************Insert Buttons**************************************/}
                    <div style={{marginTop: "30px"}}>
                        <Row>
                            <Col>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    // className={classes.button}
                                    startIcon={<AddCircleOutlineIcon/>}
                                    onClick={() => window.location.href = `/teacher/subjectMaterial/noticeInsertForm/${this.state.subject}/${this.state.grade}`}
                                    style={{
                                        marginLeft: "45%",
                                        width: "50%",
                                        backgroundColor: "#4080bf",
                                        color: "white"
                                    }}
                                >
                                    Insert Notices
                                </Button>
                            </Col>

                            <Col>
                                <Button
                                    variant="contained"
                                    color="default"
                                    // className={classes.button}
                                    startIcon={<AddCircleOutlineIcon/>}
                                    onClick={() => window.location.href = `/teacher/subjectMaterial/subjectMaterialInsertForm/${this.state.subject}/${this.state.grade}`}
                                    style={{
                                        marginLeft: "10px",
                                        width: "50%",
                                        backgroundColor: "#008080",
                                        color: "white"
                                    }}
                                >
                                    Insert Subject Materials
                                </Button>
                            </Col>
                        </Row>
                    </div>

                    {/***********************************Display Terms ********************************/}
                    <div
                        style={{
                            marginTop: "25px",
                            backgroundColor: "#d1e0e0",
                            width: "90%",
                            marginLeft: "4%",
                            border: "black",
                            // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
                    {/***************************************************************************************/}
                    {/**************************************search function**********************************/}
                    {/***************************************************************************************/}

                    {this.state.empty ?
                        <>
                        </>
                        : this.state.search ?
                            <div>
                                <Card title={"Term 0" + this.state.term}
                                      style={{
                                          marginTop: "40px",
                                          width: "97%",
                                          // border:"black",
                                          // borderStyle:"solid",
                                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                          // borderWidth:"1px"
                                      }}>
                                    {/**-------------------Report Generation Button --------------------------**/}

                                    <Button
                                        variant="contained"
                                        color="default"
                                        // className={classes.button}
                                        startIcon={<FilePdfOutlined/>}
                                        // onClick={()=> window.location.href=`/teacher/subjectMaterial/subjectMaterialInsertForm/${this.state.subject}/${this.state.grade}`}
                                        onClick={this.handleReportGeneration}
                                        style={{
                                            marginLeft: "75%",
                                            width: "25%",
                                            marginBottom: "1%",
                                            backgroundColor: " #204060",
                                            color: "white"
                                        }}
                                    >
                                        Report Generation
                                    </Button>

                                    {/***-----------------------------------------------------------------------------***/}

                                    <Card
                                        type="inner"
                                        title={this.state.searchedMaterial.week}
                                        style={{
                                            // border:"#527a7a",
                                            // borderStyle:"solid",
                                            // borderWidth:"1px",
                                            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                            padding: "2%"
                                        }}
                                    >
                                        <Divider
                                            orientation="left"
                                            style={{
                                                fontSize: "22px",
                                            }}
                                        >
                                            {this.state.searchedMaterial.unitName}
                                        </Divider>

                                        <a href={this.state.searchedMaterial.lessonUpload}>
                                            <Typography variant="subtitle1" style={{textAlign: "left"}} gutterBottom>
                                                <PictureAsPdfIcon/>
                                                {" "}
                                                {this.state.searchedMaterial.cloudinaryID}
                                            </Typography>
                                        </a>

                                        <Typography variant="subtitle1" style={{textAlign: "left"}} gutterBottom>
                                            <PlayCircleOutlineIcon/>
                                            {" "}
                                            {this.state.searchedMaterial.lectureLink}
                                        </Typography>
                                        <p></p>
                                        <Row>
                                            <Col>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    // className={classes.button}
                                                    startIcon={<DeleteIcon/>}
                                                    onClick={this.handleMaterialDelete.bind(this, this.state.searchedMaterial._id)}
                                                    style={{marginLeft: "60%", width: "30%"}}
                                                >
                                                    Delete
                                                </Button>
                                            </Col>

                                            <Col>
                                                <Button
                                                    variant="contained"
                                                    color="default"
                                                    // className={classes.button}
                                                    onClick={this.handleEditMaterials.bind(this, this.state.searchedMaterial._id)}
                                                    startIcon={<BorderColorIcon/>}
                                                    style={{
                                                        marginLeft: "10px",
                                                        width: "30%",
                                                        backgroundColor: "#282c34",
                                                        color: "white"
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <Divider style={{
                                        border: "#527a7a",
                                        borderStyle: "solid",
                                        borderWidth: "1px"
                                    }}
                                    />
                                </Card>
                            </div>

                            :

                            <div>
                                {/***********************************Display Materials ********************************/}
                                <Card title={"Term 0" + this.state.term}
                                      style={{
                                          marginTop: "40px",
                                          width: "97%",
                                          // border:"black",
                                          // borderStyle:"solid",
                                          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                          // borderWidth:"1px"
                                      }}>
                                    {/**-------------------Report Generation Button --------------------------**/}

                                    <Button
                                        variant="contained"
                                        color="default"
                                        // className={classes.button}
                                        startIcon={<FilePdfOutlined/>}
                                        // onClick={()=> window.location.href=`/teacher/subjectMaterial/subjectMaterialInsertForm/${this.state.subject}/${this.state.grade}`}
                                        onClick={this.handleReportGeneration}
                                        style={{
                                            marginLeft: "75%",
                                            width: "25%",
                                            marginBottom: "1%",
                                            backgroundColor: " #204060",
                                            color: "white"
                                        }}
                                    >
                                        Report Generation
                                    </Button>

                                    {/***-----------------------------------------------------------------------------***/}

                                    {this.state.TeacherMaterials.map((Materials) => (
                                        <>
                                            {Materials.term === this.state.term &&
                                            <>
                                                <Card
                                                    type="inner"
                                                    title={Materials.week}
                                                    style={{
                                                        // border:"#527a7a",
                                                        // borderStyle:"solid",
                                                        // borderWidth:"1px",
                                                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                                        padding: "2%"
                                                    }}
                                                >
                                                    <Divider
                                                        orientation="left"
                                                        style={{
                                                            fontSize: "22px",
                                                        }}
                                                    >
                                                        {Materials.unitName}
                                                    </Divider>

                                                    <a href={Materials.lessonUpload}>
                                                        <Typography variant="subtitle1" style={{textAlign: "left"}}
                                                                    gutterBottom>
                                                            <PictureAsPdfIcon/>
                                                            {" "}
                                                            {Materials.cloudinaryID}
                                                        </Typography>
                                                    </a>

                                                    <Typography variant="subtitle1" style={{textAlign: "left"}}
                                                                gutterBottom>
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
                                                                startIcon={<DeleteIcon/>}
                                                                onClick={this.handleMaterialDelete.bind(this, Materials._id)}
                                                                style={{marginLeft: "60%", width: "30%"}}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </Col>

                                                        <Col>
                                                            <Button
                                                                variant="contained"
                                                                color="default"
                                                                // className={classes.button}
                                                                onClick={this.handleEditMaterials.bind(this, Materials._id)}
                                                                startIcon={<BorderColorIcon/>}
                                                                style={{
                                                                    marginLeft: "10px",
                                                                    width: "30%",
                                                                    backgroundColor: "#282c34",
                                                                    color: "white"
                                                                }}
                                                            >
                                                                Edit
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </Card>
                                                <Divider style={{
                                                    border: "#527a7a",
                                                    borderStyle: "solid",
                                                    borderWidth: "1px"
                                                }}
                                                />
                                            </>
                                            }
                                        </>
                                    ))}
                                </Card>
                            </div>}

                    {/***************************************************************************************/}
                    {/**************************************search function Ends**********************************/}
                    {/***************************************************************************************/}

                    {/**************************** Successful message Alert ************************************************/}
                    <Snackbar open={this.state.open} autoHideDuration={5000} onClose={this.handleClose}>
                        <AlertMessage onClose={this.handleClose} severity="success">
                            Successfully Deleted!
                        </AlertMessage>
                    </Snackbar>

                    {/**************************** Search Error message Alert ************************************************/}
                    <Snackbar open={this.state.openNull} autoHideDuration={5000} onClose={this.handleClose}>
                        <AlertMessage onClose={this.handleClose} severity="error">
                            Searched Field Is Empty!!!
                        </AlertMessage>
                    </Snackbar>

                    {/**************************** Search Mismatch message Alert ************************************************/}
                    <Snackbar open={this.state.openMismatch} autoHideDuration={5000} onClose={this.handleClose}>
                        <AlertMessage onClose={this.handleClose} severity="warning">
                            Searched Unit Name in not Available
                        </AlertMessage>
                    </Snackbar>

                    {/**********************Report Generation Part**********************************************************/}
                    <Modal
                        visible={this.state.visible}
                        title="Report Generation For Subject Material"
                        onCancel={this.handleCancel}
                        footer={null}
                        width={'100%'}
                        style={{top: 10}}
                    >
                        <PDFViewer style={{width: '100%', height: '700px'}}>
                            <Document>
                                {this.state.terms.map((item) => (
                                    <>
                                        <Page style={styles.page}>
                                            <View style={styles.section}>
                                                <Text style={styles.text2}>{"Subject: " + this.state.subject}</Text>
                                            </View>
                                            <View style={styles.section}>
                                                <Text style={styles.text3}>Term 0{item.id}</Text>
                                            </View>
                                            <View style={styles.header}>
                                                <Text style={styles.text1}>Week </Text>
                                                <Text style={styles.text1}>Lecture Topic</Text>
                                            </View>
                                            {this.state.TeacherMaterials.map((Materials) => (
                                                <>
                                                    {Materials.term === item.id &&
                                                    <View style={styles.section}>
                                                        <Text style={styles.text}>{Materials.week}</Text>
                                                        <Text style={styles.text}>{Materials.unitName}</Text>
                                                    </View>}
                                                </>
                                            ))}
                                        </Page>
                                    </>
                                ))}
                            </Document>
                        </PDFViewer>
                    </Modal>

                    {/***************************************** End Report Part ****************************************************/}
                </div>
            </>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        marginTop:'20px',
        width:'100%',
        height:'60%'
    },
    section: {
        marginBottom:'10px',
        flexDirection: 'row',
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    header: {
        marginBottom:'10px',
        flexDirection: 'row',
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:'#006666',
    },
    text: {
        textAlign:'center',
        width:'100%',
        fontSize:'13px'
    },
    text1: {
        textAlign:'center',
        width:'100%',
        fontSize:'17px',
        color:'whitesmoke'
    },
    text2: {
        textAlign:'center',
        width:'100%',
        fontSize:'20px',
        color: '#334d4d'
    },
    text3: {
        textAlign:'center',
        width:'100%',
        fontSize:'18px',
        color: '#006666'
    }
});


export default SubjectMaterialTeachersView;
