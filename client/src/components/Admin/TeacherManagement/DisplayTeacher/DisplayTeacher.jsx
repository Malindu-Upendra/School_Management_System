import {Component} from "react";
import axios from "axios";

class DisplayTeacher extends Component {

    constructor(props) {
        super(props);
        this.state = {teachers:[]}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/admin/getTeachers')
            .then(response =>{
            this.setState({teachers:response.data})
        } )
    }

    render() {

        return (
            <div style={{ width: "80%", textAlign: "center" }}>
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">Employee Number</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Sectional Head Post</th>
                        <th scope="col">Selected Grade</th>
                        <th scope="col">Subject</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.teachers.map(teacher =>
                                <tr key ={teacher._id}>
                                    <td><a href={"/admin/addTeacher"}>{teacher.empNum}</a></td>
                                    <td>{teacher.fullName}</td>
                                    <td>{String(teacher.sectionalHead)}</td>
                                    <td>{teacher.selectedGrades}</td>

                                    {/*teacher.selectedGrades.map(*/}
                                    {/*    //sg[0] = <td>{sg}</td>*/}
                                    {/*)*/}

                                    <td>{teacher.subject}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default DisplayTeacher;