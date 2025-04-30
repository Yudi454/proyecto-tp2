import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import MainHome from "../components/mainHome/MainHome"
import lenguajes from "../data/Data";


export const Home = () => {

    console.log(lenguajes);
    

    return (
        <>
        <Header/>
        <MainHome/>
        <Footer/>
        </>
    )
}