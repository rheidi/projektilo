import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

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
  'Ei ole neuleita silmukoihin katsominen.',
  'Ei virkkuukoukku kauas sohvasta putoa.',
  'Pyörivä kerä ei sammaloidu.',
  'Jos kahvi, suklaa ja käsityöt ei auta, niin tauti on kuolemaksi.',
  'Kyllä käsityöt ihmisen kotiin ajaa.',
  'Moni neule päältä kaunis.',
  'Ei kannata mennä sohvaa edemmäs neulomaan.',
  'Neulojan lapsella ei ole villasukkia.',
  'Sitä saa mitä neuloo.',
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App yarns={yarns} anecdotes={anecdotes} />
)