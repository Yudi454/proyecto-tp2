import Nav from "./Nav";
import "../../css/Header.css"

 const Header = () =>{
    return(
        <>
        <div className="header text-center pb-4 ">  
        <h1 className="mb-5 titulo">Trabajo Práctico N*2</h1>
        <h4 className="titulo">Com 2 - Grupo 6</h4>
        </div>
        <Nav/>
        </>
    )
}

export default Header;