import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Row from 'react-bootstrap/Row'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {
    Accordion, AccordionDetails,
    AccordionSummary
} from "@material-ui/core";
import {Container, FormControl, InputGroup} from "react-bootstrap";
import decode from "jwt-decode";
import axios from "axios";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import NotListedLocationTwoToneIcon from '@material-ui/icons/NotListedLocationTwoTone';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Loader from "react-loader-spinner";

class DisplayEvents extends Component{

    state = {
        login:false,
        userID:'',
        events:[],
        open:false,
        specificEvent:'',
        isDeleted:false,
        decision:false
    }

    componentDidMount = async () => {
        this.setState({isDeleted:false});
        if(sessionStorage.token) {
            this.setState({userID:decode(sessionStorage.token).username});
            this.setState({login:true})
        }else {
            this.setState({login:false})
        }

        await axios.get('http://localhost:5000/public/displayEvents').then(res => {
            if(res.data.success){
                const events = res.data.data;
                this.setState({events:events})
            }
            }
        )
    }

    handleOpen = async (item) => {
        this.setState({open:true});
        await this.setState({specificEvent:item});
    };

    handleClose = () => {
        this.setState({open:false})
    };

    onEventDelete = async (event) => {
        event.preventDefault()
        this.setState({decision:true})

        await axios.delete(`http://localhost:5000/public/deleteEvent/${this.state.specificEvent.cloudinaryID}/${this.state.specificEvent._id}`).then(async res => {
            if(res.data.success){
                await setTimeout(() => {
                    this.setState({decision:false})
                    this.setState({isDeleted:true});
                },3000)
                await setTimeout(() => {
                    window.location.reload(false);
                }, 3000);
            }
        })
    }

    render() {
        return(
            <div style={{marginLeft:"10%",width:"80%",marginTop:"50px"}}>
                <Typography variant="h4" style={{marginLeft:"46%",width:"40%"}} gutterBottom>
                    Events
                </Typography>

                { this.state.login &&
                     <Button variant="contained" style={{margin:"auto",backgroundColor:"#80ff80",width:"100%",marginBottom:"50px"}} href={"/addEvent"}>
                        Add Event
                     </Button>
                }
                    {/*---------------------*/}

                <div>
                    {this.state.events.map((item) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >

                            <Typography>{item.eventName}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Container>
                                <Row>
                                    <img style={{margin:"auto"}} src={item.flyer}/>
                                </Row>
                                <Row>
                                    <h3 style={{textAlign:"center",marginTop:"20px"}}>{item.eventName} </h3>
                                </Row>
                            <Row>
                            <p>{item.description}</p>
                            </Row>
                                <Row>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">Date</InputGroup.Text>
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        value={item.selectedDate}
                                        disabled
                                    />
                                        <InputGroup.Text id="inputGroup-sizing-default">Venue</InputGroup.Text>
                                        <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        value={item.venue}
                                        disabled
                                    />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-default">Link</InputGroup.Text>
                                        <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    value={item.link}
                                    disabled
                                />
                                    </InputGroup>
                                </Row>
                                <Row>
                                    <h5 style={{marginTop:"10px"}}>Contact Details </h5>
                                    <h6>Name : {item.name}</h6>
                                    <h6>Email : {item.email}</h6>
                                    <h6>Phone Number : {item.phoneNumber}</h6>
                                </Row>
                                {this.state.userID === item.userID &&
                                <ButtonGroup disableElevation fullWidth variant="contained" >
                                    <Button style={{backgroundColor:'#668cff'}} onClick={()=> window.location.href=`/updateEvent/${item._id}`}>Update</Button>
                                    <Button style={{backgroundColor:'#ff3333'}} onClick={this.handleOpen.bind(this,item)}>Delete</Button>
                                </ButtonGroup>
                                }
                            </Container>
                        </AccordionDetails>
                    </Accordion>
                    ))}
                </div>

                    {/*---------------------*/}

                {this.state.login &&

                <Button variant="contained"
                        style={{margin: "auto", backgroundColor: "#80ff80", width: "100%", marginTop: "50px"}}
                        href={"/addEvent"}>
                    Add Event
                </Button>

                }
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
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                >
                    <Fade in={this.state.open}>
                        <div style={{height:'200px',width:'500px',backgroundColor:'white',border: '2px solid red',boxShadow:'0 1rem 2rem rgba(0,0,0,0.2)'}}>
                            {this.state.isDeleted ?
                            <Typography variant="h5" style={{textAlign:'center',marginTop:'30px'}} gutterBottom>
                                <CheckCircleOutlineIcon style={{color:'Green'}}/>
                                Successfully Deleted
                            </Typography>
                                : this.state.decision ?
                                    <div style={{textAlign:'center'}}>
                                        <Loader
                                            visible={this.state.decision}
                                            type="Rings"
                                            color="#ff3333"
                                            height={150}
                                            width={150}
                                            timeout={300000} //3 secs
                                        />
                                        <h5>Deleting... Please Wait</h5>
                                    </div>

                                    :
                                <>
                                <Typography variant="h5" style={{textAlign:'center',marginTop:'30px'}} gutterBottom>
                                <NotListedLocationTwoToneIcon style={{color:'red'}}/>
                                Are you sure delete this event ?
                                </Typography>
                                <div style={{float:'right',marginRight:'10%',marginTop:'50px'}}>
                                <Button variant="contained" onClick={this.handleClose}>Cancel</Button>
                                <Button variant="contained" onClick={this.onEventDelete} style={{marginLeft:'10px',backgroundColor:'#ff3333'}}>Delete</Button>
                                </div>
                                </>

                            }
                        </div>
                    </Fade>
                </Modal>
            </div>
        )
    }

}

export default DisplayEvents;