import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Card, CardActions, Container} from "@material-ui/core";
import {Component} from "react";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardContent from "@material-ui/core/CardContent";

class Attendance extends Component {

    state = {
        dates: [],
        attendance:[],
        testColumns:[],
        testRows:[],
        currentDates:[]
    }

    componentDidMount = async () => {
        const m = new Date()

        console.log(m.getDay())

        const dt = new Date();

        const month = dt.getMonth() + 1;
        const year = dt.getFullYear();

        const daysInMonth = new Date(year, month, 0).getDate();

        let sdate = 4;
        let sday = ""

        for(let i =1;i<=daysInMonth;i++){

            switch (sdate) {
                case 1 : sday = "Sunday"
                break;
                case 2 : sday = "Monday"
                    break;
                case 3 : sday = "Tuesday"
                    break;
                case 4 : sday = "Wednesday"
                    break;
                case 5 : sday = "Thursday"
                    break;
                case 6 : sday = "Friday"
                    break;
                case 7 : sday = "Saturday"
                    break;
                default:sday = null
                    break;
            }

            ++sdate;

            this.state.currentDates.push({date:i+"/"+month+"/"+year,day:sday})

            if(sdate === 8){
                sdate = 1
            }
        }

        await axios.get('http://localhost:5000/student/getDates').then(async res => {
            if(res.data.success){
                await this.setState({dates:res.data.data});
                await this.state.dates.map(async (c,index) => {
                    await this.state.testColumns.push({field:"day"+(index+1),headerName: c._id.attendanceDate,width: 210})
                    // this.state.attendance.map(async (s) => {
                    //     await this.state.testRows.
                    //     // if(c._id.attendanceDate === s.attendanceDate){
                    //     //     console.log(s)
                    //     // }
                    // })
                })
            }
        })

        await axios.get('http://localhost:5000/student/getAllDetailsOfAttendance').then(async res => {
            if(res.data.success){
                await this.setState({attendance:res.data.data});
            }
        })

        // await this.state.dates.map(async (c,index) => {
        //     await this.state.testColumns.push({field:"day"+(index+1),headerName: c._id.attendanceDate,width: 210})
        //     // this.state.attendance.map(async (s) => {
        //     //     await this.state.testRows.
        //     //     // if(c._id.attendanceDate === s.attendanceDate){
        //     //     //     console.log(s)
        //     //     // }
        //     // })
        // })

        // this.state.testColumns.map((test) => {
        //     console.log(test.headerName)
        // })

        // console.log(this.state.testColumns)
        // console.log(columns)

    }

    render() {
        return (
            <>
                <Container>
                    <div style={{width: "100%", marginTop: "50px"}}>
                        <Typography variant="h6" style={{textAlign: "center"}} gutterBottom>
                            Student's Attendance
                        </Typography>
                        <Button style={{width: "100%"}} variant="contained" color="primary">
                            Generate Report
                        </Button>
                    </div>
                </Container >
                <Container maxWidth="lg" style={{marginTop:"20px",width:"90%"}}>
                <Grid container spacing={1} style={{margin:"auto"}}>
                    {this.state.currentDates.map((item) => (
                    <Grid item style={{width:"14%"}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" color="text.secondary" gutterBottom>
                                   {item.date}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                    {item.day}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Container>
            </>
        );
    }
}

export default Attendance;
