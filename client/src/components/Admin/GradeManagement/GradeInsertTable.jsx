import React , {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Search from "antd/es/input/Search";
import {Space} from "antd";

class GradeTableInsertTable extends Component {

    render() {
        return (
            <>
                <Typography variant="h6" style={{textAlign: "center", marginTop: "50px", marginBottom: "20px"}} gutterBottom>
                    Student List
                </Typography>
                <Space direction="vertical" style={{width:"100%"}}>
                    <Search placeholder="Search by Registration Number" onSearch={this.onSearch} style={{width:"50%", marginLeft:"25%"}} enterButton />
                </Space>
                <table className="table" style={{
                    textAlign: "center",
                    marginTop: "50px",
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "1px solid teal",
                    marginBottom: "200px"
                }}>
                    <thead className="thead-dark">
                    <tr style={{backgroundColor: "teal"}}>
                        <th scope="col">Student No</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Student Result</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ST0001</td>
                        <td>Ahmed Ameer</td>
                        <td>Result not uploaded</td>
                        <td><Button onClick={() => window.location.href = '/admin/InsertStudentResult'}>Insert
                            Result</Button></td>
                    </tr>
                    <tr>
                        <td>ST0002</td>
                        <td>Malindu Upendra</td>
                        <td>Result not uploaded</td>
                        <td><Button onClick={() => window.location.href = '/admin/InsertStudentResult'}>Insert
                            Result</Button></td>
                    </tr>
                    <tr>
                        <td>ST0003</td>
                        <td>Hussain Nazzimudeen</td>
                        <td>Result not uploaded</td>
                        <td><Button onClick={() => window.location.href = '/admin/InsertStudentResult'}>Insert
                            Result</Button></td>
                    </tr>
                    <tr>
                        <td>ST0004</td>
                        <td>Dilan Perera</td>
                        <td>Result not uploaded</td>
                        <td><Button onClick={() => window.location.href = '/admin/InsertStudentResult'}>Insert
                            Result</Button></td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default GradeTableInsertTable;