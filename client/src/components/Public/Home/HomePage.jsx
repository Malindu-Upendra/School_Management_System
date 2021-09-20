import React, {Component} from "react";
import GallerySlide from "./GallerySlide/GallerySlide";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";

class HomePage extends Component{
    render() {
        return(
            <>
                <div style={{marginLeft:"4%",marginTop:"20px"}}>
                    <OurServices/>
                    <GallerySlide/>
                    <AboutUs/>
                </div>
            </>
        )
    }
}

export default HomePage;
