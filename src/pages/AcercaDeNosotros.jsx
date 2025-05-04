import "../css/acerca.css";
import { Card, Col, Row, Container } from "react-bootstrap";

const AcercaDeNosotros = () => {
  return (
    <div className="acerca-de-nosotros">
      <h2 className="subtitulo2">NUESTRO EQUIPO</h2>
      <br />
      <Container>
        <br />
        <Row className="mb-4">
          <Col md={4}>
            <Card className="card-acerca" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="imagenPerfil.jpg"
                style={{ height: "330px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="tituloCartaAcerca">CAMILA JUAREZ</Card.Title>
                <Card.Text>
                  Estudiante de programacion en la
                  UTN-FRT, lenguajes y tecnologías que manejo:
                  <br />
                  <br />
                  <ul>
                    <li type="none">
                      {" "}
                      JavaScript{" "}
                      <i className="devicon-javascript-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      C# <i className="devicon-csharp-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      Java <i className="devicon-java-plain colored"></i>{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-acerca" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="Lucas.jpg"
                style={{ height: "330px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>LUCAS YUDI</Card.Title>
                <Card.Text>
                  Estudiante de programacion en la UTN-FRT, lenguajes y
                  tecnologías que manejo:
                  <br />
                  <br />
                  <ul>
                    <li type="none">
                      {" "}
                      JavaScript{" "}
                      <i className="devicon-javascript-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      C# <i className="devicon-csharp-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      Java <i className="devicon-java-plain colored"></i>{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-acerca" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="Esteban.jpg"
                style={{ height: "330px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>FEDERICO HERRERA</Card.Title>
                <Card.Text>
                  Estudiante de programacion en la UTN-FRT, lenguajes y
                  tecnologías que manejo:
                  <br />
                  <br />
                  <ul>
                    <li type="none">
                      {" "}
                      JavaScript{" "}
                      <i className="devicon-javascript-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      C# <i className="devicon-csharp-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      Java <i className="devicon-java-plain colored"></i>{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="card-acerca" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="Esteban.jpg"
                style={{ height: "330px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>ESTEBAN WYTRYKUSZ</Card.Title>
                <Card.Text>
                  Estudiante de programacion en la UTN-FRT, lenguajes y
                  tecnologías que manejo:
                  <br />
                  <br />
                  <ul>
                    <li type="none">
                      {" "}
                      JavaScript{" "}
                      <i className="devicon-javascript-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      C# <i className="devicon-csharp-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      Java <i className="devicon-java-plain colored"></i>{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-acerca" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="Nicolas.jpg"
                style={{ height: "330px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>NICOLAS IÑIGO</Card.Title>
                <Card.Text>
                  Estudiante de programacion en la UTN-FRT, lenguajes y
                  tecnologías que manejo:
                  <br />
                  <br />
                  <ul>
                    <li type="none">
                      {" "}
                      JavaScript{" "}
                      <i className="devicon-javascript-plain colored"></i>{" "}
                    </li>
                    <li type="none">
                      Python <i className="devicon-python-plain colored"></i>{" "}
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <br />
          </Col>
          <br />
        </Row>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AcercaDeNosotros;
