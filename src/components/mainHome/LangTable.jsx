import Table from 'react-bootstrap/Table';

const LangTable = ({ lenguajes }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Lenguaje</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody style={{ '--bs-table-bg': '#FF9E77' }}>
          {lenguajes.map((lenguaje) => (
            <tr key={lenguaje.id}>
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
