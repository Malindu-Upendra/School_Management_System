import React, {Component} from "react";
import axios from "axios";
import {Card, Divider} from "antd";
import Typography from "@material-ui/core/Typography";
import PictureAsPdfIcon from "@material-ui/icons/InsertDriveFile";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import {Col, Row} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";

class Test extends Component{

    state = {
        TeacherMaterials:[],
        wholeMaterials:[
            {
                id:1,
                name:"john"
            },
            {
                id:1,
                name:"mahir"
            },
            {
                id:1,
                name:"malindu"
            },
            {
                id:2,
                name:"hussain"
            },
            {
                id:2,
                name:"dilan"
            },
        ],
        value:0,
        term:''
    }

    componentDidMount = () => {
        this.setState({TeacherMaterials:this.state.wholeMaterials})
    }

    changeContent = async (value) => {
        this.setState({term:value})
    }

    render() {
        return(
            <>
                {this.state.wholeMaterials.map((item) => (
                    <>
                        {item.id === this.state.term && <h4>{item.name}</h4>}
                    </>
                ))}

                <button onClick={this.changeContent.bind(this,1)}>1</button>
                <button onClick={this.changeContent.bind(this,2)}>2</button>
            </>
        )
    }

}

export default Test;