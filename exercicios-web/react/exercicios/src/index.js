import React from 'react'
import ReactDOM from 'react-dom'

import Multiplos from './components/Multiplos'

ReactDOM.render(
  <div>
    <Multiplos.BoaTarde nome="Ana" />
    <Multiplos.BoaNoite nome="Bia" />
  </div>
  , document.getElementById('root'))
