import React, {Component, useEffect} from "react";
import ReportContent from './ReportContent'
import { PDFViewer } from '@react-pdf/renderer';

class ReportGeneration extends Component{

    render() {
        return(
            <PDFViewer style={{width:'100%',height:'700px'}}>
                <ReportContent />
            </PDFViewer>
        )
    }

}

export default ReportGeneration
