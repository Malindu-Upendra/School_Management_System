import React , {Component} from "react";
import { DataGrid } from '@material-ui/data-grid';
import {Modal, Button, Space, Alert} from 'antd';
import Search from "antd/es/input/Search";

class StudentRetrieve extends Component{

    state = {

        columns : [
            {
                field: 'id',
                headerName: 'Registration Number',
                width: '450' },
            {
                field: 'Name',
                headerName: 'Name',
                width: 350,
            },
            {
                field: 'Grade',
                headerName: 'Grade',
                width: 400,
            },

        ],
        rows : [
            { id: 1, Name: 'Jon Snow',  Grade: 35 },
            { id: 2, Name: 'Cersei Lannister',  Grade: 42 },
            { id: 3, Name: 'Lannister',  Grade: 45 },
            { id: 4, Name: 'Jaime Stark',  Grade: 16 },
            { id: 5, Name: 'Daenerys Targaryen',  Grade: 5 },
            { id: 6, Name: 'Melisandre',  Grade: 150 },
            { id: 7, Name: 'Ferrara Clifford',  Grade: 44 },
            { id: 8, Name: 'Rossini Frances',  Grade: 36 },
            { id: 9, Name: 'Harvey Roxie',  Grade: 65 },
        ],
        isModalVisible:false,
        selectedStudent:'',
        loading:false,
        found:false,
        empty:false
    }

    handleRowSelection = (e) => {

        // prints correct indexes of selected rows
        const location = e.at();
        console.log(location);

        this.state.rows.forEach((detail,index) => {

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

    handleOk = () => {
        this.setState({loading:true})
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
            this.setState({isModalVisible:false})
        }, 3000);
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
            this.state.rows.forEach((detail, index) => {

                if (item - 1 === index) {
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
                <div style={{marginLeft:"20%",width:"60%",marginTop:"100px"}}>
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
                        <Button key="submit" type="danger" loading={this.state.loading} onClick={this.handleOk}>
                            Delete
                        </Button>,
                    ]}
                >
                    <p>ID = {this.state.selectedStudent.id}</p>
                    <p>name = {this.state.selectedStudent.Name}</p>
                    <p>grade = {this.state.selectedStudent.Grade}</p>
                </Modal>

            </div>
        )
    }

}

export default StudentRetrieve;

