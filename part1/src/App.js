import { useState } from "react"

const Title = (props) => {
  return(
    <div>
      <h1>{props.otsikko} </h1>
    </div>
  )
}

const Lista = ({ yarns }) => {
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

const Yarn = (props) => {
  const {name, meterage, weight} = props.yarn
  return (
    <tr>
      <td>{name}</td>
      <td>{meterage}m/{weight}g. </td>
    </tr>
  )
}

const App = ({ yarns, anecdotes }) => {
  const otsikko = 'Villa on parasta'

  const [selected, setSelected] = useState(0)

  const setRandom = () => setSelected(Math.floor(Math.random() * (anecdotes.length +1)))

  return (
    <div>
      <Title otsikko={otsikko} />
      <Lista yarns={yarns} />
      <br />
      {anecdotes[selected]}<br />
      <button onClick={setRandom}>
        satunnainen
      </button>
    </div>
  )
}



export default App
