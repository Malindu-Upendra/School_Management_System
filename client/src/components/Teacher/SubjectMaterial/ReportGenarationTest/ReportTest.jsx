import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
//import DisplayEvents from "../../../Public/Events/DisplayEvents/DisplayEvents";
import { ComponentToPrint } from './ComponentToPrint'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const ReportTest = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            {/*<button style={{  marginLeft: 1250 ,backgroundColor:"teal",width:200,height:40,color:"white",marginTop:50}}*/}
            {/*        onClick={handlePrint} >*/}
            {/*    Download Report*/}
            {/*</button>*/}
            <div style={{marginLeft:"4%",marginTop:"50px",marginRight:"4%"}}>
            <Grid item xs={3} style={{marginLeft:"80%"}}>
                <Button
                    variant="outlined"
                    color="primary"
                    style={{marginTop:"15px",width:"100%",marginBottom:"20px"}}
                    startIcon={<CloudDownloadIcon/>}
                    onClick={handlePrint}
                >
                    Download Report
                </Button>
            </Grid>

            <ComponentToPrint ref={componentRef} />
            </div>
        </div>
    );
};
export default ReportTest;
