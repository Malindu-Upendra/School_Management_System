import React, {Component} from "react";
import {Card, Carousel, Col} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Row from "react-bootstrap/Row";



class GallerySlide extends Component{
    render() {
        return(
            <>
                <div style={{
                    color: "#334d4d",
                    fontWeight: "bold",
                    fontSize: "30px",
                    textAlign: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginTop:"4%"
                }}>
                    H2MD School location info and gallery
                </div>
                <hr style={{
                    border: "1px solid #c2c2a3",
                    width: "100px",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}>
                </hr>
                <Row>
                    <Col>
                        <div style={{position:'relative',textAlign:'right',height:'100%',width:'100%'}}>
                            <div style={{overflow:'hidden', background:'none', height:'100%', width:'100%'}}>
                                <iframe width="100%" height="100%" id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=KRC%20school%20Kollupitya&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                <a href="https://2piratebay.org"></a>
                                <p></p>
                            </div>
                        </div>
                    </Col>

                    <Col style={{marginRight:"2%"}}>
                <Carousel style={{width:'96%'}}>
                    <Carousel.Item interval={1000} >
                        <img
                            className="d-block w-100"
                            src="/Images/img0.jpg"
                            alt="First slide"
                            style={{height:"500px",
                                opacity: 0.5
                            }}
                        />
                        <Carousel.Caption style={{marginBottom:"25%"}}>
                            <h3>
                                <img src="/Assets/H2MD.png" alt="" style={{maxWidth: 200}} />
                            </h3>

                            <Card style={{
                                backgroundColor: 'transparent',
                                boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.4)"
                            }}>
                                <Card.Body style={{
                                    color: "#334d4d",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                }}

                                > Friendly environment with Library Facilities</Card.Body>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="/Images/img02.jpeg"
                            alt="Second slide"
                            style={{height:"500px",
                                opacity: 0.5
                            }}
                        />
                        <Carousel.Caption style={{marginBottom:"25%"}}>
                            <h3>
                                <img src="/Assets/H2MD.png" alt="" style={{maxWidth: 200}} />
                            </h3>

                            <Card style={{
                                backgroundColor: 'transparent',
                                boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.4)"
                            }}>
                                <Card.Body style={{
                                    color: "#334d4d",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                }}

                                > Your Path To Greatness To Start Here</Card.Body>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/img03.jpg"
                            alt="Third slide"
                            style={{height:"500px",
                                opacity: 0.5
                            }}
                        />
                        <Carousel.Caption style={{marginBottom:"28%"}}>
                            <h3>
                                <img src="/Assets/H2MD.png" alt="" style={{maxWidth: 200}} />
                            </h3>

                            <Card style={{
                                backgroundColor: 'transparent',
                                boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.4)"
                            }}>
                                <Card.Body style={{
                                    color: "#334d4d",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                }}

                                > Nursery Environment </Card.Body>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/Images/img04.jpg"
                            alt="Third slide"
                            style={{height:"500px",
                                opacity: 0.5
                            }}
                        />

                        <Carousel.Caption style={{marginBottom:"25%",marginRight:"15%"}}>
                            <h3>
                                <img src="/Assets/H2MD.png" alt="" style={{maxWidth: 200}} />
                            </h3>

                            <Card style={{
                                backgroundColor: 'transparent',
                                boxShadow: "0 1rem 2.5rem rgba(0,0,0,0.4)",
                            }}>
                                <Card.Body style={{
                                    color: "#334d4d",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                }}
                                > Sports and Extra Curriculum Activities </Card.Body>
                            </Card>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                    </Col>
                </Row>
            </>
        )
    }
}
export default GallerySlide;
