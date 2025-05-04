
const Nav = ({setMostrar}) => {

  return (
    <div className="nav text-center">
        <p onClick={()=> {setMostrar(false)}} className="textoClickeable ms-3 me-3">Home</p>
        <p onClick={()=> {setMostrar(true)}} className="textoClickeable me-3">Acerca de Nosotros</p>
        <a href="https://frt.utn.edu.ar/" target="_blank">Utn Frt 2025</a>
    </div>
  )
}

export default Nav
