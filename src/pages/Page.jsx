
import Banner from "../components/Banner";
import CaroselTeam from "../components/CaroselTeam";
import DataBlockOne from "../components/DataBlockOne";
import DataBlockThree from "../components/DataBlockThree";
import DataBlockTwo from "../components/DataBlockTwo";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import PhotoGallery from "../components/PhotoGallery";
import PhotoGalleryMobile from "../components/PhotoGalleryMobile";




function Page(){
    return(
        <>
            <Header/>
            <Banner/>
            <DataBlockOne/>
            <InfoCard/>
            <DataBlockTwo/>
            <CaroselTeam/>
            <DataBlockThree/>
            <PhotoGallery/>
            <PhotoGalleryMobile/>
            <Footer/>
            
        </>
    )
}

export default Page;