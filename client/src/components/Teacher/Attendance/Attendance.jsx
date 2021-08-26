import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Typography from "@material-ui/core/Typography";
import {Space} from "antd";
import Search from "antd/es/input/Search";
import Button from "@material-ui/core/Button";
import {Container} from "@material-ui/core";

const columns = [
    { field: 'id', headerName: '#', width: 90 },
    {
        field: 'regNum',
        headerName: 'Registration Number',
        width: 250,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
    },
    {
        field: 'day1',
        headerName: 'Day 01',
        width: 210,
    },
    {
        field: 'day2',
        headerName: 'Day 02',
        width: 210,
    },
    {
        field: 'day3',
        headerName: 'Day 03',
        width: 210,
    },
    {
        field: 'day4',
        headerName: 'Day 04',
        width: 210,
    },
    {
        field: 'day5',
        headerName: 'Day 05',
        width: 210,
    },
];

const rows = [
    { id: 1,regNum:'ST00001', name: 'Snow', day1:'Present', day2:'Present',day3:'Present',day4:'Present',day5:'Present'},
    { id: 2,regNum:'ST00002', name: 'Lannister', day1:'Absent', day2:'Present',day3:'Absent',day4:'Present',day5:'Present' },
    { id: 3,regNum:'ST00003', name: 'Lannister', day1:'Present', day2:'Present',day3:'Present',day4:'Absent',day5:'Present' },
    { id: 4,regNum:'ST00004', name: 'Stark', day1:'Present', day2:'Absent',day3:'Present',day4:'Present',day5:'Present' },
    { id: 5,regNum:'ST00005', name: 'Targaryen', day1:'Present', day2:'Present',day3:'Present',day4:'Present',day5:'Present' },
    { id: 6,regNum:'ST00006', name: 'Melisandre', day1:'Absent', day2:'Present',day3:'Absent',day4:'Present',day5:'Present'},
    { id: 7,regNum:'ST00007', name: 'Clifford', day1:'Present', day2:'Absent',day3:'Present',day4:'Absent',day5:'Present'},
    { id: 8,regNum:'ST00008', name: 'Frances', day1:'Present', day2:'Absent',day3:'Present',day4:'Present',day5:'Present'},
    { id: 9,regNum:'ST00009', name: 'Roxie', day1:'Absent', day2:'Present',day3:'Present',day4:'Present',day5:'Present' },
];

export default function Attendance() {
    return (
        <>
            <Container>
        <div style={{width:"100%",marginTop:"50px"}}>
            <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                 Student's Attendance
            </Typography>
                <Button style={{width:"100%"}} variant="contained" color="primary">
                    Generate Report
                </Button>
        </div>
            </Container>
        <div style={{ height: 530, width: '80%',margin:"auto",marginTop:"20px",boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>
        <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                disableSelectionOnClick
            />
        </div>
        </>
    );
}
