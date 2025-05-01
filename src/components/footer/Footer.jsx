import Map from "./Map";

const Footer = () => {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center px-4 py-4"
      style={{
        backgroundImage: `url("https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/conoce-5-lenguajes-de-programacion-basicos.jpg")`,
        backgroundPosition: 'center',
        fontWeight: 'bold',
        color:"blue",
        backgroundSize: 'cover',
        textShadow: "1px 1px 3px rgb(255, 255, 255)",
      }}
    >
      <h3>UTN - FRT 2025</h3>
      <p className="m-3" style={{color:"red"}}>
        La facultad regional de tucuman es una unidad academica dependiente de
        la universidad tecnologica nacional establecida en 1954 en forma
        conjunta con las facultades de bahia blanca y la plata. su sede se
        encuentra en la zona norte de la ciudad de san miguel de tucuman.
      </p>
      <Map />
    </div>
  );
};

export default Footer;
