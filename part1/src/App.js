import { useState } from "react"
import List from './components/List'
import Title from './components/Title'

const App = ({ yarns, anecdotes }) => {
  const otsikko = 'Villa on parasta'
  const [selected, setSelected] = useState(0)
  const setRandom = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))

  return (
    <div>
      <Title otsikko={otsikko} />
      <List yarns={yarns} />
      <br />
      {anecdotes[selected]}<br />
      <button onClick={setRandom}>
        satunnainen
      </button>
    </div>
  )
}

export default App
