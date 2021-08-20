import React , {Component} from "react";
import { DataGrid } from '@material-ui/data-grid';
import {Modal, Button, Space, Alert} from 'antd';
import Search from "antd/es/input/Search";
import axios from "axios";
import {InputGroup,FormControl} from "react-bootstrap";

class StudentRetrieve extends Component{

    state = {

        columns : [
            {
                field: 'id',
                headerName: '#',
                width: 300
            },
            {
                field: 'regNum',
                headerName: 'Registration Number',
                width: 300,
            },
            {
                field: 'Name',
                headerName: 'Name',
                width: 300,
            },
            {
                field: 'Grade',
                headerName: 'Grade',
                width: 300,
            },

        ],
        rows : [],
        students : [],
        isModalVisible:false,
        selectedStudent:'',
        loading:false,
        found:false,
        empty:false
    }

    componentDidMount = async () => {

       await axios.get('http://localhost:5000/admin/getStudents').then(res => {
            if(res.data.success){
                //id name grade
                const response = res.data.data;
                this.setState({students:response});
                let person = [];
                response.forEach((student,index) => {

                    let s = {
                        id:index+1,
                        regNum:student.administrationNum,
                        Name:student.name,
                        Grade:student.grade
                    }

                    person.push(s);

                })

                this.setState({rows:person})
            }
        })

    }

    handleRowSelection = (e) => {

        // prints correct indexes of selected rows
        const location = e.at();
        console.log(location);

        this.state.students.forEach((detail,index) => {

            if(location - 1  === index){
                this.setState({selectedStudent:detail});
                console.log(detail);
                this.showModal();
            }
        })

    }

    showModal = () => {
        this.setState({isModalVisible:true})
    };

    handleOk = (id) => {
        console.log(id);
        this.setState({loading:true})

        axios.delete(`http://localhost:5000/admin/deleteStudent/${id}`).then(res => {
        if(res.data.success){
            setTimeout(() => {
                this.setState({ loading: false, visible: false });
                this.setState({isModalVisible:false})
            }, 3000);

        }})
    };

    handleCancel = () => {
        this.setState({isModalVisible:false})
    };

    onSearch = (item) => {
        console.log(item);
        let count = 0;

        if(item === ""){
            this.setState({empty:true});
            setTimeout(() => {
                this.setState({empty:false})
            }, 3000);
        }else {
            this.state.students.forEach((detail, index) => {

                if (item === detail.administrationNum) {
                    console.log(detail);
                    count = 1;
                    this.setState({selectedStudent:detail});
                    this.setState({isModalVisible:true});
                }
            })

            if(count === 0){
                this.setState({found:true})
                setTimeout(() => {
                    this.setState({found:false})
                }, 3000);
            }
        }
    }

    render() {
        return(
            <div>
                <div style={{marginLeft:"20%",width:"60%",marginTop:"50px"}}>
                    <Space direction="vertical" style={{width:"100%"}}>
                        <Search placeholder="Search by Registration Number" onSearch={this.onSearch} style={{width:"100%"}} enterButton />
                    </Space>
                </div>
                {this.state.found ? <Alert
                    style={{ width: '80%',margin:"auto", marginTop:"10px"}}
                    message="Error"
                    description="Searched Registration Number isn't Available"
                    type="error"
                    showIcon
                /> : this.state.empty ?
                    <Alert
                        style={{ width: '80%',margin:"auto", marginTop:"10px"}}
                        message="Empty"
                        description="Searched Field Is Empty"
                        type="info"
                        showIcon
                    />: null}
                <div style={{ height: 600, width: '80%',margin:"auto",marginTop:"20px",boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                    <DataGrid
                        rows={this.state.rows}
                        columns={this.state.columns}
                        pageSize={10}
                        onSelectionModelChange = {this.handleRowSelection}
                    />
                </div>
                <Modal
                    visible={this.state.isModalVisible}
                    title="Student Details"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="danger" loading={this.state.loading} onClick={this.handleOk.bind(this,this.state.selectedStudent._id)}>
                            Delete
                        </Button>,
                    ]}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Administration Number</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.selectedStudent.administrationNum}
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.selectedStudent.name}
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Birthday</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.selectedStudent.birthday}
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Age</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.selectedStudent.age}
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Grade</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.selectedStudent.grade}
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.selectedStudent.email}
                            disabled
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            value={this.state.selectedStudent.password}
                            disabled
                        />
                    </InputGroup>
                </Modal>

            </div>
        )
    }

}

export default StudentRetrieve;

