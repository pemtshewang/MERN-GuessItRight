import './App.css'
import Input from './components/Input'
import Lives from './components/Lives'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import axios from "axios"

const getWord = async () => {
  try {
    const response = await axios.get("/word/random")
    return response.data[0]
  } catch (err) {
    console.log(err)
    return null;
  }

}

function App() {
  const [totalLives, setTotalLives] = useState(5);

  const [won, setWin] = useState(false)
  const [word, setWord] = useState("")

  useEffect(() => {
    const fetchWord = async () => {
      const wordData = await getWord()
      if (wordData) {
        setWord(wordData)
      }
    }
    fetchWord()
  }, [])

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
      <div className='header'>
        <h1>Guess It Right</h1>
      </div>
      <div className="container__lives">
        <div className="banner">
          <h3>Lives Remaining</h3>
        </div>
        <Lives count={totalLives} />
      </div>
      {word && (
        <div className="container__hint">
          <h4>Hint: </h4>
          <b>{word.hint}</b>
        </div>
      )}
      {word && (
        <div className='container__app__input'>
          <Input totalLives={totalLives} updateLives={setTotalLives} updateWin={setWin} word={word} />
        </div>
      )}
      <Footer />
    </div >
  )
}

export default App
