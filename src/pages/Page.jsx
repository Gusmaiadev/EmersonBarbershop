
import Banner from "../components/Banner";
import CaroselTeam from "../components/CaroselTeam";
import DataBlockOne from "../components/DataBlockOne";
import DataBlockTwo from "../components/DataBlockTwo";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";


function Page(){
    return(
        <>
            <Header/>
            <Banner/>
            <DataBlockOne/>
            <InfoCard/>
            <DataBlockTwo/>
            <CaroselTeam/>
            
        </>
    )
}

export default Page;