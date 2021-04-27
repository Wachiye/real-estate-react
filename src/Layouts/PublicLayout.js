import React from "react";

import Header from "../components/Header/Header";
import CarouselHeader from "../components/Header/CarouselHeader";
import Footer from "../components/Footer/Footer";

const PublicLayout = ({ children}) => {
    return (
        <>
           <Header/>
            <>{children}</>
            <Footer />
        </>
    );
};

const PublicLayoutWithCarousel = ({ children}) => {
    return (
        <>
            <CarouselHeader/>
            <>{children}</>
            <Footer />
        </>

    );
}
export  default  PublicLayout;
export {PublicLayoutWithCarousel};