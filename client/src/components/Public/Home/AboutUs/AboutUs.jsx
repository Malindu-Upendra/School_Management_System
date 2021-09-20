import React from 'react';
import {Carousel, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";

const AboutUs = () => {

    return (
        <div style={{marginTop:"5%"}}>
                <h2 style={{
                    color: "#334d4d",
                    fontWeight: "bold",

                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex"
                }}>
                    More About H2MD International School
                </h2>
            <hr style={{
                border: "1px solid #c2c2a3",
                width: "100px",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
            </hr>
            <Row style={{marginTop:"2%",marginRight:"6%"}}>
                <Col>
                <p style={{ fontSize: "20px"}}>
                    H2MD International School is a Leading School on Colombo,
                    we provide best knowledge and Qualities to our Students.
                    And also We have the best Staffs In our School.
                </p>
                    <p style={{ fontSize: "20px"}}>
                    We make sure that Students get the best infrastructure and set of extraCurriculum
                    to ensure the best experience of your School Life.
                </p>
                    <p style={{ fontSize: "20px"}}>
                    And also we teach you how to handle thousands of things on you’re just
                    starting out, So you are in the right place.
                </p>
                </Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src="/Images/aboutUs.png"
                        alt="First slide"
                        style={{height:"300px"
                        }}
                    />
                </Col>

            </Row>
        </div>
    );
};

export default AboutUs;
