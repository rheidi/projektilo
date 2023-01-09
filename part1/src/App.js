import { useState } from "react"
import List from './components/List'
import Title from './components/Title'

const App = ({ yarns, anecdotes }) => {
  const otsikko = 'Villa on parasta'
  const [yarnState, setYarnState] = useState(yarns)
  const [newYarn, setNewYarn] = useState('')
  const [newWeight, setNewWeight] = useState('')
  const [newLength, setNewLenght] = useState('')

  const addYarn = (event) => {
    event.preventDefault()
    const yarnObject = {
      id: yarnState.lenght+1,
      name: newYarn,
      weight: newWeight,
      meterage: newLength,
    }
    setYarnState(yarnState.concat(yarnObject))
    setNewYarn('')
    setNewWeight('')
    setNewLenght('')
  }

  const handleYarnChange = (event) => {
    setNewYarn(event.target.value)
  }

  const handleWeightChange = (event) => {
    setNewWeight(event.target.value)
  }

  const handleLengthChange = (event) => {
    setNewLenght(event.target.value)
  }

  const [selected, setSelected] = useState(0)
  const setRandom = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))

  return (
    <div>
      <Title otsikko={otsikko} />
      <List yarns={yarnState} />
      <br />
      <form onSubmit={addYarn}>
        <input
          placeholder="langan nimi"
          value={newYarn}
          onChange={handleYarnChange}
        /><br />
        <input
          placeholder="kerän paino"
          value={newWeight}
          onChange={handleWeightChange}
        /><br />
        <input
          placeholder="metrien määrä kerässä"
          value={newLength}
          onChange={handleLengthChange}
        />
      <br />
      <button type="submit">tallenna</button>
      </form>
      <br />
      {anecdotes[selected]}<br />
      <button onClick={setRandom}>
        satunnainen
      </button>
    </div>
  )
}

export default App
