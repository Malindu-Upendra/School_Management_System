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

class DisplayEvents extends Component{

    render() {
        return(
            <div style={{marginLeft:"10%",width:"80%",marginTop:"50px"}}>
                <Typography variant="h4" style={{marginLeft:"46%",width:"40%"}} gutterBottom>
                    Events
                </Typography>
                     <Button variant="contained" style={{margin:"auto",backgroundColor:"#80ff80",width:"100%",marginBottom:"50px"}} href={"/addEvent"}>
                        Add Event
                     </Button>

                    {/*---------------------*/}

                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >

                            <Typography>Feeling Stressed ?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Container>
                                <Row>
                                    <img style={{margin:"auto"}} src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1128&q=80"/>
                                </Row>
                                <Row>
                                    <h3 style={{textAlign:"center",marginTop:"20px"}}>Feeling Stressed ? </h3>
                                </Row>
                            <Row>
                            <p>Exercise is one of the most important things you can do to combat stress.

                                It might seem contradictory, but putting physical stress on your body through exercise can relieve mental stress.

                                The benefits are strongest when you exercise regularly. People who exercise regularly are less likely to experience anxiety than those who don’t exercise. Join Us With Zoom</p>
                            </Row>
                                <Row>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">Link</InputGroup.Text> <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            value="https://us04web.zoom.us/j/73889167979?pwd=OEJSRVd5dXhDZWpLTkY0K0FFeXI5dz09&from=addon"
                                            disabled
                                        />
                                    </InputGroup>
                                </Row>
                                <Row>
                                    <h5 style={{marginTop:"10px"}}>Contact Details </h5>
                                    <h6>Name : Malindu Upendra</h6>
                                    <h6>Email : upednramalindu116@gmail.com </h6>
                                    <h6>Phone Number : 0765503230</h6>
                                </Row>
                            </Container>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography >Mother's Day</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Container style={{width:"100%"}}>
                                <Row>
                                    <img style={{margin:"auto"}} src="https://images.unsplash.com/photo-1628191140046-8be8856fd011?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
                                </Row>
                                <Row>
                                    <h3 style={{textAlign:"center",marginTop:"20px"}}>Mother's Day </h3>
                                </Row>
                                <Row>
                                    <p>It's one of those clichés that's actually true: The best Mother's Day gift you can give to your mom is your time.
                                        And while the COVID-19 pandemic is still making it tricky for families to spend time together, there are still plenty of ways to make Mother's Day special.
                                        We've found a range of Mother's Day activities to suit your family's needs. If you're lucky enough to able to get together indoors with your mama,
                                        you can try the usual brunch — or go for something a little more creative and cook out of your comfort zone. Those who aren't gathering indoors this year can find a bunch of outdoor activities, from lawn games to hikes to outdoor performances.
                                        And if you're not living close to your mom at the moment and can't travel home for a visit, there are plenty of ways to stay virtually connected and create a special quarantine Mother's Day.
                                        (Hopefully, this one will be the last one.) Whether you treat her to a massage or take an online class with her, one of the suggestions on our list will surely create memories that she'll talk about for years to come.
                                        Join Us With Zoom</p>
                                </Row>
                                <Row>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="inputGroup-sizing-default">Link</InputGroup.Text> <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        value="https://us04web.zoom.us/j/73889167979?pwd=OEJSRVd5dXhDZWpLTkY0K0FFeXI5dz09&from=addon"
                                        disabled
                                    />
                                    </InputGroup>
                                </Row>
                                <Row>
                                    <h5 style={{marginTop:"10px"}}>Contact Details </h5>
                                    <h6>Name : Malindu Upendra</h6>
                                    <h6>Email : upednramalindu116@gmail.com </h6>
                                    <h6>Phone Number : 0765503230</h6>
                                </Row>
                            </Container>
                        </AccordionDetails>
                    </Accordion>
                </div>

                    {/*---------------------*/}

                    <Button variant="contained" style={{margin:"auto",backgroundColor:"#80ff80",width:"100%",marginTop:"50px"}} href={"/addEvent"}>
                        Add Event
                     </Button>
            </div>
        )
    }

}

export default DisplayEvents;