import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Portfolio } from "../../components/Portfolio";
import { ProfileCard } from "../../components/ProfileCard";

export function HomePage (){
    return (
        <>
            <Header/>
            <ProfileCard/>
            <Portfolio/>
            <Footer/>
        </>
    )
}