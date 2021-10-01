
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {ComponentToPrint} from "./ComponentToPrint";

const ReportTest = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>

            {/*<button onClick={handlePrint}>Print this out!</button>*/}

            <button style={{backgroundColor:"teal",width:200,height:40,color:"white",marginTop:50}}
                    onClick={handlePrint} >
                Download Report
            </button>
            <ComponentToPrint ref={componentRef} />
        </div>
    );
};
export default ReportTest;
