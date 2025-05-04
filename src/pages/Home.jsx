import { useState } from "react";
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import MainHome from "../components/mainHome/MainHome"
import lenguajes from "../data/Data";
import AcercaDeNosotros from "./AcercaDeNosotros";


export const Home = () => {

    const [mostrar,setMostrar] = useState(false)

    return (
        <>
        <Header setMostrar={setMostrar}/>
        {!mostrar ? <MainHome lenguajes={lenguajes}/> : <AcercaDeNosotros/> }
        <Footer/>
        </>
    )
}