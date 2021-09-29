import * as React from 'react';
import {Component} from "react";
import { Calendar, Button ,Modal ,Row, Col ,Typography} from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';
import axios from "axios";
import ReportGenerationForAttendance from "./ReportGeneration";

class Attendance extends Component {

    state = {
        StudentAttendance:[],
        currentDates:[],
        open:false,
        dateForModal:'',
        attendanceForModal:[],
        numberOfMonth:0,
        month:'',
        visible:false
    }


    componentDidMount = async () => {

        await axios.get('http://localhost:5000/teacher/getAllDetailsOfAttendance').then(async res => {
            if(res.data.success){
                await this.setState({StudentAttendance:res.data.data});
            }
        })

    }

    handleDate = async (d) => {
        const date = new Date(d);
        const currentDate = date.getDate()+ "/" +(date.getMonth()+1)+ "/" +date.getFullYear()

        await this.state.StudentAttendance.map(async (item) => {

                    if (currentDate === item.attendanceDate){
                       await this.state.attendanceForModal.push({name: item.name, registrationNum: item.username})
                }
                })

        Modal.info({
            title: `Attendance on ${currentDate}`,
            content: (
                <div>
                    {this.state.attendanceForModal.length === 0 ?
                        <Typography>
                            <Typography.Title style={{textAlign:"center"}}>
                            No Attendance Marked For The Day
                            </Typography.Title>
                        </Typography>
                        :
                        <>
                    <Row>
                        <Col span={12}>Name</Col>
                        <Col span={12}>Registration Number</Col>
                    </Row>
                    <Row>
                        {this.state.attendanceForModal.map((item,index) => (
                            <>
                        <Col span={16}>{(index + 1) + " " + item.name}</Col>
                        <Col span={8}>{item.registrationNum}</Col>
                            </>
                            ))}
                    </Row>
                        </>
                    }
                </div>
            ),
            onOk:() => {this.emptyArray()},
        });
    }

    emptyArray = () => {
        this.setState({attendanceForModal:[]})
    }

    dateCellRender = (value) => {
        return (
            <ul className="events">
                <Button onClick={this.handleDate.bind(this,value)}>View</Button>
            </ul>
        );
    }

    getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    }

    monthCellRender = (value) => {
        const num = this.getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
            </div>
        ) : null;
    }

    handleReportGeneration = () => {
        this.setState({visible:true})
    }

    handleCancel = () => {
        this.setState({visible:false})
    }

    render() {
        return (
            <div style={{width:'100%'}}>
            <div style={{width:"85%",margin:"auto",marginTop:"50px",boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
                <Typography.Title style={{textAlign:"center"}}>
                    Attendance
                </Typography.Title>
                <Button type="primary" style={{width:"100%",fontSize:"15px"}} onClick={this.handleReportGeneration} icon={<FilePdfOutlined />} size="large">
                    Generate The Report
                </Button>
                <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender}/>
            </div>
        <Modal
            visible={this.state.visible}
            title="Report Generation"
            onCancel={this.handleCancel}
            footer={null}
            width={'100%'}
            style={{top:10}}
        >
            <ReportGenerationForAttendance/>
        </Modal>
        </div>
        )
    }
}

export default Attendance;
