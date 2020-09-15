import React from 'react'

import PageDescription from 'components/PageDescription'
import TypingDiv from 'components/TypingDiv'

import './App.css'

function App() {
  return (
    <div className="App">
      <PageDescription test="タイピングアプリのプロトタイプ" />
      <br />
      <TypingDiv />
    </div>
  )
}

export default App
