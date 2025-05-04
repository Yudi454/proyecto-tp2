import { Col, Row } from "react-bootstrap"
import Article from "./Article"
import Aside from "./Aside"
import LangTable from "./LangTable"
import "../../css/MainHome.css"

const MainHome = ({lenguajes}) => {



  return (
    <div className="text-center mainHome">
      <h2 className="m-4 mb-5 subtitulo">Lenguajes de Programación 2025</h2>
      <Row className="gx-0">
        <Col md={3}>
        <Aside/>
        </Col>
        <Col>
        <Article lenguajes={lenguajes}/>
        </Col>
      </Row>
      <LangTable lenguajes={lenguajes}/>
    </div>
  )
}

export default MainHome
