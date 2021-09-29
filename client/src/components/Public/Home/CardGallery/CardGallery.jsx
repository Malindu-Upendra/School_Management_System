import React, {Component} from "react";
import {Card, Carousel, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";

class CardGallery extends Component{
    render() {
        return(
            <>
                <div style={{marginTop:"3%"}}>
                {/*<Carousel>*/}
                    <Row style={{marginRight:"3%"}}>
                        <Col>
                            <Card style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                                <Card.Img variant="top"  src="/Images/card06.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{
                                        color: "#334d4d",
                                        fontWeight: "bold",}}
                                    >
                                        Our Sports Day
                                    </Card.Title>

                                    <Card.Text>
                                        Through an event like a sports day children get the chance to show leadership, teamwork and communication skills,
                                        as they interact with new people and face new challenges.
                                    </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                                <Card.Img variant="top"  src="/Images/card04.jpg" />
                                <Card.Body>
                                    <Card.Title style={{
                                        color: "#334d4d",
                                        fontWeight: "bold",}}
                                    >
                                        Independence Day
                                    </Card.Title>

                                    <Card.Text>
                                        Through an event like a Independence day children get the chance to show respect towards country. And also
                                        as they interact with new people and face new challenges.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                                <Card.Img variant="top"  src="/Images/card03.jpg" />
                                <Card.Body>
                                    <Card.Title style={{
                                        color: "#334d4d",
                                        fontWeight: "bold",}}
                                    >
                                        Avurudhu Celebration
                                    </Card.Title>

                                    <Card.Text>
                                        Through an event like a Avurudhu day children get the chance to show leadership, teamwork and communication skills,
                                        as they interact with new Mates and face new challenges.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                                <Card.Img variant="top"  src="/Images/card02.jpg" />
                                <Card.Body>
                                    <Card.Title style={{
                                        color: "#334d4d",
                                        fontWeight: "bold",}}
                                    >
                                        Annual Day
                                    </Card.Title>
                                    <Card.Text>
                                        Through an event like a Annual day children get the chance to show leadership, teamwork and communication skills,
                                        as they interact with new people and face new challenges.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                {/*</Carousel>*/}
                </div>
            </>
        )
    }
}
export default  CardGallery;
