import Table from 'react-bootstrap/Table';
import "../../css/LangTable.css"

const LangTable = ({ lenguajes }) => {
  return (
    <div className='langTable'>
      <Table striped bordered >
        <thead>
          <tr>
            <th>ID</th>
            <th>Lenguaje</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {lenguajes.map((lenguaje) => (
            <tr className='filaTabla' key={lenguaje.id}>
              <td>{lenguaje.id}</td>
              <td>{lenguaje.nombre}</td>
              <td>{lenguaje.tipo}</td>
              <td>{lenguaje.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LangTable;
