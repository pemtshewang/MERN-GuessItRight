import './App.css'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import ThemeToggle from './components/Switch'
import data from "../data/data.json"
import NavBar from './components/Header'

const getWord = () => {
  return data;
}

function App() {
  const [totalLives, setTotalLives] = useState(5);

  const [won, setWin] = useState(false)
  const [word, setWord] = useState(null)

  useEffect(() => {
    setWord(getWord()[0])
  })
  
  // consider the side effects
  useEffect(() => {
    if (won) {
      alert("You won the game")
      window.location.reload()
    }
    if (totalLives < 1) {
      alert("You lose the game")
      window.location.reload()
    }
  }, [totalLives, won])

  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div >
  )
}

export default App
