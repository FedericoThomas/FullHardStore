import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import "./App.css"

const App = () => {
  return (
    <div className="app" bg-current >
      <NavBar />
    
      <ItemListContainer mensaje=" aca esta lo que buscas"/>
    </div>
  )
}

export default App