import {Component} from "react";
import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Zoom from '@material-ui/core/Zoom';

class Profile extends Component{

    state ={
        transition : true
    }

    render() {
        return(
            <div style={{marginTop:"40px"}}>
                <h3 style={{textAlign:"center",marginBottom:"30px"}}>Student Profile</h3>
                <Container style={{boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                    <Row style={{margin:"auto"}} xs={1} md={2}>
                        <Zoom in={this.state.transition}>
                            <div className="container" style={{height:"585px",overflowY:"scroll",border:'1px solid'}}>
                                <Form >
                                    <h4 style={{textAlign:"center"}}>Grades</h4>
                                    <ButtonGroup aria-label="Basic example" style={{width:"100%"}}>
                                        <Button variant="secondary">Term 01</Button>
                                        <Button variant="secondary">Term 02</Button>
                                        <Button variant="secondary">Term 03</Button>
                                    </ButtonGroup>
                                    <Form.Group>
                                        <Form.Label>subject 01</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 01</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 02</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 03</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 04</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 05</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 06</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 07</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 08</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>subject 09</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Zoom>
                        <Zoom in={this.state.transition} style={{ transitionDelay: this.state.transition ? '500ms' : '0ms' }}>
                            <Form style={{border:'1px solid'}}>
                                <Form.Group>
                                    <Form.Label>Administration Number</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Grade</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Birthday</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Form>
                        </Zoom>
                    </Row>
                    <Row>
                        <Button style={{width:"100%",height:"200px",marginTop:"30px"}} variant="outline-success"><h3>Mark Attendance</h3></Button>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Profile