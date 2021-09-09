import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Row from 'react-bootstrap/Row'
import {
    Accordion, AccordionDetails,
    AccordionSummary
} from "@material-ui/core";
import {Container, FormControl, InputGroup} from "react-bootstrap";
import decode from "jwt-decode";
import axios from "axios";

class DisplayEvents extends Component{

    state = {
        login:false,
        user:'',
        events:[]
    }

    componentDidMount = async () => {
        if(sessionStorage.token) {
            this.setState({user:decode(sessionStorage.token).position});
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
                                        <InputGroup.Text id="inputGroup-sizing-default">Link</InputGroup.Text> <FormControl
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
            </div>
        )
    }

}

export default DisplayEvents;