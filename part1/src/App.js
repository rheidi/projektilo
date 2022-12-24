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
      <tr>
        <th>Langan nimi:</th>
        <th>Langan vahvuus:</th>
      </tr>
      {yarns.map(yarn => <Yarn yarn={yarn} />)}
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

const App = () => {
  const otsikko = 'Villa on parasta'
  const yarns = [
    {
      id: 1,
      name: 'Fabel',
      weight: 50,
      meterage: 205,
    },
    {
      id: 2,
      name: '7 Veljestä',
      weight: 100,
      meterage: 200,
    },
    {
      id: 3,
      name: 'Merino Sock',
      weight: 100,
      meterage: 425,
    },
  ]  
  const anecdotes = [
    'Hyvin suunniteltu on puoliksi neulottu.',
    'Älä jätä huomiseksi sitä, jonka voit neuloa jo tänään.',
    'Neulehetki kullan kallis.',
    'Kell\' lankaa on, se langan kätkeköön.',
    'Parempi pyöröpuikko pipossa kuin kymmenen villapaidassa.',
    'Itku pitkästä purkamisesta, pieru paljon neulomisesta.',
    'Purkaminen on opintojen äiti.',
    'Seuraa kuin neuloja lanka-alennuksia.',
    'Nyt on langat vähissä.',
    'Ei ole nauleita silmukoihin katsominen.',
    'Ei virkkuukoukku kauas sohvasta putoa.',
    'Pyörivä kerä ei sammaloidu.',
    'Jos kahvi, suklaa ja käsityöt ei auta, niin tauti on kuolemaksi.',
    'Kyllä käsityöt ihmisen kotiin ajaa.',
    'Moni neule päältä kaunis.',
    'Ei kannata mennä sohvaa edemmäs neulomaan.',
    'Neulojan lapsella ei ole villasukkia.',
    'Sitä saa mitä neuloo.',
  ]

  const [selected, setSelected] = useState(0)

  const increaseByOne = () => setSelected(selected +1)
  const setToZero = () => setSelected(0)

  return (
    <div>
      <Title otsikko={otsikko} />
      <Lista yarns={yarns} />
      <br />
      {anecdotes[selected]}<br />
      <button onClick={increaseByOne}>
        seuraava
      </button>
      <button onClick={setToZero}>
        aloita alusta
      </button>
    </div>
  )
}



export default App
