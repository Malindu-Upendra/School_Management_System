import React, { useRef } from 'react';
import axios from "axios";
import Button from "@material-ui/core/Button";
import {Card, Divider} from "antd";
import Typography from "@material-ui/core/Typography";
import PictureAsPdfIcon from "@material-ui/icons/InsertDriveFile";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export class ComponentToPrint  extends React.PureComponent{
    // constructor(props) {
    //     super(props);
    // }
    // state = {
    //     Materials:[],
    //     term:'1',
    //     subject:''
    // }
    //
    // componentDidMount = async ()=> {
    //     const subject = this.props.match.params.subject;
    //     this.setState({subject:subject})
    //     await axios.get(`http://localhost:5000/teacher/getSubjectMaterials/${subject}`).
    //     then(res => {
    //         const  Materials = res.data.data;
    //         console.log("Bull" + Materials);
    //         this.setState({Materials: Materials});
    //     }).catch(err => err.message)
    // }
    //
    // termHandler = async (term) => {
    //     this.setState({term:term})
    // }

    render() {
        return(
            <>
                {/*<div style={{marginLeft:"4%",marginTop:"70px"}}>*/}

                {/*    /!***********************************Display Terms ********************************!/*/}
                {/*    <div*/}
                {/*        style={{marginTop:"25px",*/}
                {/*            backgroundColor:"#d1e0e0",*/}
                {/*            width:"91%",*/}
                {/*            marginLeft:"4%",*/}
                {/*            border:"black",*/}
                {/*            borderStyle:"solid",*/}
                {/*            borderWidth:"1px"}}*/}
                {/*        className="site-button-ghost-wrapper">*/}

                {/*        <Button*/}
                {/*            ghost*/}
                {/*            onClick={this.termHandler.bind(this,"1")}*/}
                {/*            style={{width:"30%"}}>*/}
                {/*            Term 01*/}
                {/*        </Button>*/}
                {/*        <Divider type="vertical"*/}
                {/*                 style={{border:"#527a7a",*/}
                {/*                     borderStyle:"solid",*/}
                {/*                     borderWidth:"1px"}}*/}
                {/*        />*/}
                {/*        <Button*/}
                {/*            ghost*/}
                {/*            onClick={this.termHandler.bind(this,"2")}*/}
                {/*            style={{width:"30%"}}>*/}
                {/*            Term 02*/}
                {/*        </Button>*/}
                {/*        <Divider type="vertical"*/}
                {/*                 style={{border:"#527a7a",*/}
                {/*                     borderStyle:"solid",*/}
                {/*                     borderWidth:"1px"}}*/}
                {/*        />*/}
                {/*        <Button*/}
                {/*            ghost*/}
                {/*            onClick={this.termHandler.bind(this,"3")}*/}
                {/*            style={{width:"30%"}}>*/}
                {/*            Term 03*/}
                {/*        </Button>*/}
                {/*    </div>*/}

                {/*/!***********************************Display Materials ********************************!/*/}
                {/*<Card title={"Term 0"+this.state.term}*/}
                {/*      style={{marginTop:"30px",*/}
                {/*          width:"96%",*/}
                {/*          border:"black",*/}
                {/*          borderStyle:"solid",*/}
                {/*          borderWidth:"1px"}}>*/}
                {/*    {this.state.Materials.map((Materials) => (*/}
                {/*        <>*/}
                {/*            {Materials.term===this.state.term && Materials.subjectChoose==='Mathematics' &&*/}
                {/*            <>*/}
                {/*                <Card*/}
                {/*                    type="inner"*/}
                {/*                    title={Materials.week}*/}
                {/*                    style={{border:"#527a7a",*/}
                {/*                        borderStyle:"solid",*/}
                {/*                        borderWidth:"1px"}}*/}
                {/*                >*/}
                {/*                    <Divider*/}
                {/*                        orientation="left"*/}
                {/*                        style={{fontSize:"23px"}}*/}
                {/*                    >*/}
                {/*                        {Materials.unitName}*/}
                {/*                    </Divider>*/}

                {/*                    <a href={Materials.lessonUpload}>*/}
                {/*                        <Typography variant="subtitle1" style={{textAlign:"left"}} gutterBottom>*/}
                {/*                            <PictureAsPdfIcon/>*/}
                {/*                            {" "}*/}
                {/*                            {Materials.cloudinaryID}*/}
                {/*                        </Typography>*/}
                {/*                    </a>*/}

                {/*                    <Typography variant="subtitle1" style={{textAlign:"left"}} gutterBottom>*/}
                {/*                        <PlayCircleOutlineIcon/>*/}
                {/*                        {" "}*/}
                {/*                        {Materials.lectureLink}*/}
                {/*                    </Typography>*/}
                {/*                </Card>*/}
                {/*                <Divider style={{border:"#527a7a",*/}
                {/*                    borderStyle:"solid",*/}
                {/*                    borderWidth:"1px"}}*/}
                {/*                />*/}
                {/*            </>*/}
                {/*            }*/}
                {/*        </>*/}
                {/*    ))}*/}
                {/*</Card>*/}
                {/*</div>*/}

                Hello
            </>
        )
    }
}
