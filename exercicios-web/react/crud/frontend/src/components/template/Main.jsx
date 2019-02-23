import React from 'react'
import './Main'
import Header from './Header'

export default props => 
  <React.Fragment>
    <Header />
      <main className="content">
        Conteúdo
      </main>
  </React.Fragment>
