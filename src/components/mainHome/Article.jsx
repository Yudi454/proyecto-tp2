import { Button, Card, Col, Row } from "react-bootstrap";

const Article = ({ lenguajes }) => {
  console.log(lenguajes);

  return (
    <div>
      <Row>
        {lenguajes.map((lenguaje) => (
          <Col md={4} key={lenguaje.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={lenguaje.imagen} />
              <Card.Body>
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
