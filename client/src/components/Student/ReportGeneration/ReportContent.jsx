import React, {Component, useEffect} from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import axios from "axios";
import decode from "jwt-decode";

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
        terms:[{term:'1'},{term:'2'},{term:'3'}],
        grades:[],
        userID:'',
        studentDetails:''
    }

    componentDidMount = async () => {

        await this.setState({userID:decode(sessionStorage.token).username});

        await axios.get(`http://localhost:5000/student/getStudentDetails/${this.state.userID}`).then(res => {
            if(res.data.success){
                this.setState({studentDetails:res.data.data})
            }
        })

        await axios.get(`http://localhost:5000/student/getGrades/${this.state.userID}/${this.state.studentDetails.grade}`).then(res => {
            if(res.data.success) {
                this.setState({grades: res.data.data})
            }})
    }

    render()
    {
        return (
            <Document>
                {this.state.terms.map((item) => (
                    <>
                        <Page  style={styles.page}>
                            <View style={styles.section}>
                                <Text style={styles.text}>Grades</Text>
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.text}>Term {item.term+" "+this.state.studentDetails.name+" "+this.state.studentDetails.administrationNum}</Text>
                            </View>
                            <View style={styles.header}>
                                <Text style={styles.text}>Subject</Text>
                                <Text style={styles.text}>Grade</Text>
                            </View>
                            {this.state.grades.map((i) => (
                                i.grades.map((grade) => (
                                <>
                                    {item.term === i.term &&
                                    <View style={styles.section}>
                                        <Text style={styles.text}>{grade.subject}</Text>
                                        <Text style={styles.text}>{grade.result}</Text>
                                    </View>
                                    }
                                </>
                                ))
                            ))}

                        </Page>
                    </>
                ))}
            </Document>
        )
    }
};

export default ReportContent
