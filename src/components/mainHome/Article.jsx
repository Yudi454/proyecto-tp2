import { Button, Card, Col, Row } from "react-bootstrap";
import "../../css/Article.css"

const Article = ({ lenguajes }) => {
  console.log(lenguajes);

  return (
    <div>
      <Row className="gx-0">
        {lenguajes.map((lenguaje) => (
          <Col md={6} sm ={12} lg={4} key={lenguaje.id} className="mb-3">
            <Card className="carta" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={lenguaje.imagen} />
              <Card.Body className="cuerpoCarta">
                <Card.Title>{lenguaje.nombre}</Card.Title>
                <Card.Text>{lenguaje.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Article;
