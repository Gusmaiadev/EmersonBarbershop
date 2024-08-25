
import Banner from "../components/Banner";
import CaroselTeam from "../components/CaroselTeam";
import DataBlockOne from "../components/DataBlockOne";
import DataBlockThree from "../components/DataBlockThree";
import DataBlockTwo from "../components/DataBlockTwo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";
import PhotoGallery from "../components/PhotoGallery";
import PhotoGalleryMobile from "../components/PhotoGalleryMobile";
import SpaceHeader from "../components/SpaceHeader";




function Page(){
    return(
        <>
            <Header />
            <SpaceHeader/>
            <Banner/>
            <DataBlockOne id='section1'/>
            <InfoCard id='section2'/>
            <DataBlockTwo id='section3'/>
            <CaroselTeam id='section4'/>
            <DataBlockThree id='section5'/>
            <PhotoGallery id='section6'/>
            <PhotoGalleryMobile id='section8'/>
            <Footer id='section7'/>
            <Maps/>
            
        </>
    )
}

export default Page;