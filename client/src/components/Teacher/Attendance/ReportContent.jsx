import React, {Component, useEffect} from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from "axios";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        marginTop:'20px',
        width:'100%',
        height:'60%'
    },
    section: {
        marginBottom:'10px',
        flexDirection: 'row',
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    header: {
        marginBottom:'10px',
        flexDirection: 'row',
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:'#99ccff'
    },
    text: {
        textAlign:'center',
        width:'100%',
        fontSize:'10px'
    }
});

// Create Document Component
class ReportContent extends Component{

    state = {
        dates:[],
        StudentAttendance:[]
    }

    componentDidMount = async () => {
    await axios.get('http://localhost:5000/teacher/getDates').then(async res => {
            if(res.data.success){
                await this.setState({dates:res.data.data});
            }
        })

        await axios.get('http://localhost:5000/teacher/getAllDetailsOfAttendance').then(async res => {
            if(res.data.success){
                await this.setState({StudentAttendance:res.data.data});
            }
        })
    }

    render()
    {
        return (
            <Document>
                {this.state.dates.map((item) => (
                    <>
                <Page  style={styles.page}>
                    <View style={styles.section}>
                        <Text style={styles.text}>Attendance</Text>
                    </View>
                            <View style={styles.section}>
                             <Text style={styles.text}>{item._id.attendanceDate}</Text>
                             </View>
                            <View style={styles.header}>
                                <Text style={styles.text}>Administration Number</Text>
                                <Text style={styles.text}>Student name</Text>
                            </View>
                                 {this.state.StudentAttendance.map((ad) => (
                                     <>
                                     {item._id.attendanceDate === ad.attendanceDate &&
                                     <View style={styles.section}>
                                         <Text style={styles.text}>{ad.username}</Text>
                                         <Text style={styles.text}>{ad.name}</Text>
                                     </View>
                                     }
                                     </>
                                ))}

                </Page>
                    </>
                ))}
            </Document>
        )
    }
};

export default ReportContent
