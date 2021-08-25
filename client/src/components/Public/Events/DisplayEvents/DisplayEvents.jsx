import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Accordion, AccordionDetails,
    AccordionSummary
} from "@material-ui/core";

class DisplayEvents extends Component{

    render() {
        return(
            <div style={{marginLeft:"10%",width:"80%",marginTop:"50px"}}>
                <Typography variant="h4" style={{marginLeft:"45%",width:"40%"}} gutterBottom>
                    Events
                </Typography>
                     <Button variant="contained" style={{margin:"auto",backgroundColor:"#80ff80",width:"100%",marginBottom:"50px"}} href={"/addEvent"}>
                        Add Event
                     </Button>

                    {/*---------------------*/}

                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography >Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                    {/*---------------------*/}

                    <Button variant="contained" style={{margin:"auto",backgroundColor:"#80ff80",width:"100%",marginTop:"50px"}} href={"/addEvent"}>
                        Add Event
                     </Button>
            </div>
        )
    }

}

export default DisplayEvents;