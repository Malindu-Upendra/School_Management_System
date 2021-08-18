import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";


class NoticeInsertForm extends Component{
    render() {
        return(
            <>
                <div style={{width:"40%",marginLeft:"28%",marginTop:"100px",
                    border:"#008080", borderWidth:"3px", borderStyle:"solid", padding:"3%",
                    boxShadow: "0 1rem 2rem rgba(0,0,0,0.2)"}}>

                    <Typography variant="h6" style={{textAlign:"center"}} gutterBottom>
                        Notices
                    </Typography>
                </div>
            </>
        )
    }
}

export default NoticeInsertForm