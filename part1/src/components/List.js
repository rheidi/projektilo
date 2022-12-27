import Yarn from './Yarn'

const List = ({ yarns }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Langan nimi:</th>
          <th>Langan vahvuus:</th>
        </tr>
      </thead>
      <tbody>
        {yarns.map(yarn => <Yarn key={yarn.id} yarn={yarn} />)}
      </tbody>
    </table>
  ) 
}

export default List