import { useState } from "react"
import List from './components/List'
import Yarn from "./components/Yarn"
import Title from './components/Title'

const App = ({ yarns, anecdotes }) => {
  const otsikko = 'Villa on parasta'
  const [yarnState, setYarnState] = useState(yarns)
  const [newYarn, setNewYarn] = useState(
    'lisää lankaa...'
  )

  const addYarn = (event) => {
    event.preventDefault()
    const yarnObject = {
      id: yarnState.lenght+1,
      name: newYarn,
      weight: 0,
      meterage: 0,
    }

    setYarnState(yarnState.concat(yarnObject))
    setNewYarn('')
  }

  const handleYarnChange = (event) => {
    setNewYarn(event.target.value)
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
          value={newYarn}
          onChange={handleYarnChange}
        />
        <button type="submit">save</button>
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
