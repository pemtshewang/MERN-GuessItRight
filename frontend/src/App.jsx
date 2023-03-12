import './App.css'
import Input from './components/Input'
import Lives from './components/Lives'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'

const word = {
  word: "Python",
  hint: "The Intelligent Reptile",
  score: 10
};
function App() {
  const [totalLives, setTotalLives] = useState(5);
  const [won, setWin] = useState(false)
  // prevent the window from reloading two times
  useEffect(() => {
    if (won) {
      alert("You won the game")
      window.location.reload()
    }
    if (totalLives < 1) {
      alert("You lose the game")
      window.location.reload()
    }
  }, [won, totalLives])
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
      <div className="container__hint">
        <h4>Hint: </h4>
        <b>{word.hint}</b>
      </div>
      <div className='container__app__input'>
        <Input totalLives={totalLives} updateLives={setTotalLives} updateWin={setWin} />
      </div>
      <Footer />
    </div >
  )
}

export default App
