import React from 'react';
import {Carousel, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const OurServices = () => {

    return (
        <div style={{marginTop:"5%"}}>
            <h2 style={{
                color: "#334d4d",
                fontWeight: "bold",
                textAlign: "center",
                justifyContent: "center",
                display: "flex"
            }}>
                World Class Education
            </h2>
            <hr style={{
                border: "1px solid #c2c2a3",
                width: "100px",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
            </hr>

            <Row style={{marginTop:"2%",marginRight:"6%"}}>
                <Col style={{marginTop:"4%"}}>
                    <h3 style={{
                        color: "#334d4d",
                        fontWeight: "bold",
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex"
                    }}>
                        Finds you to make your path
                    </h3>

                    <p style={{ fontSize: "20px"}}>
                        We Make Sure to deliver You a good teaching with great staffs and also we will make you to reach your path.
                        H2MD International School lift you Up from zero to Hero
                    </p>
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src="/Images/OurService3.png"
                        alt="First slide"
                        style={{height:"300px"
                        }}
                    />
                </Col>
            </Row>

            <Row style={{marginTop:"4%",marginRight:"6%"}}>
                <Col>
                    <img
                        className="d-block w-100"
                        src="/Images/OurService1.png"
                        alt="First slide"
                        style={{height:"300px"
                        }}
                    />
                </Col>

                <Col style={{marginTop:"4%"}}>
                    <h3 style={{
                        color: "#334d4d",
                        fontWeight: "bold",
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex"
                    }}>
                        Virtual and Digital Teaching
                    </h3>

                    <p style={{ fontSize: "20px"}}>
                        Now we are building up with digital teaching and deliver you a great knowledge on virtual platform
                        with customized teaching panels that fits your need
                    </p>
                </Col>
            </Row>

            <Row style={{marginTop:"4%",marginRight:"6%"}}>
                <Col style={{marginTop:"4%"}}>
                    <h3 style={{
                        color: "#334d4d",
                        fontWeight: "bold",
                        textAlign: "center",
                        justifyContent: "center",
                        display: "flex"
                    }}>
                        Quality is our priority
                    </h3>

                    <p style={{ fontSize: "20px"}}>
                        We have our best staff panel who are professional on teaching, training and managing the students to right path
                        and also ensures delivering the hard-work to build you a perfect Student to the society
                    </p>
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src="/Images/OurService2.png"
                        alt="First slide"
                        style={{height:"300px"
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default OurServices;
