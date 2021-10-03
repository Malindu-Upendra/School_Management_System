import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './classroomTimetable'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const ReportTest = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <div style={{marginLeft:"4%",marginTop:"50px",marginRight:"4%"}}>
                <Grid item xs={3} style={{marginLeft:"80%"}}>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{marginTop:"15px",width:"100%",marginBottom:"20px"}}
                        startIcon={<CloudDownloadIcon/>}
                        onClick={handlePrint}
                    >
                        Download PDF
                    </Button>
                </Grid>

                <ComponentToPrint ref={componentRef} />
            </div>
        </div>
    );
};
export default ReportTest;
