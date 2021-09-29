import React, {Component} from "react";
import GallerySlide from "./GallerySlide/GallerySlide";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";
import CardGallery from "./CardGallery/CardGallery";
import Hero from "./HeroSection/HeroSection";

class HomePage extends Component{
    render() {
        return(
            <>
                <div style={{marginLeft:"4%",marginTop:"20px"}}>
                    <Hero/>
                    <CardGallery/>
                    <OurServices/>
                    <GallerySlide/>
                    <AboutUs/>
                </div>
            </>
        )
    }
}

export default HomePage;
