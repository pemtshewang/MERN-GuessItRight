import { useState, useRef, useEffect } from "react";


const Input = (props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [chars, setChars] = useState(() => {
    const charsFromWord = {};
    Array.from(props.word.word).forEach((char, index) => {
      charsFromWord[`char_${index}`] = "";
    });
    return charsFromWord;
  });

  const cmpChars = () => {
    const keys = Object.keys(chars)
    for (let index = 0; index < keys.length; index++) {
      if (chars[keys[index]] !== props.word.word[index]) {
        return false
      }
    }
    return true
  }
  const width = Math.floor(window.innerWidth / word.word.length);
  const [err, setErr] = useState("");
  const [guessChar, setGuessChar] = useState("");

  const matchChars = () => {
    if (inputRef.current.value !== "") {
      let isMatched = false;
      const newChars = { ...chars };
      Array.from(props.word.word).forEach((char, index) => {
        if (inputRef.current.value === char) {
          newChars[`char_${index}`] = char;
          isMatched = true;
        }
      });
      if (isMatched) {
        setChars(newChars);
        inputRef.current.style.borderColor = "lightgreen"
      } else {
        props.updateLives((totalLives) => totalLives - 1);
        inputRef.current.style.borderColor = "red"
      }
      setErr("");
      setGuessChar("");
    } else {
      setErr("Please input a character");
    }
  };

  const update = (e) => {
    setGuessChar(e.target.value);
  };
  useEffect(() => {
    if (cmpChars()) {
      props.updateWin(true)
    }
  }, [cmpChars])
  return (
    <div className="container__enter">
      <div className="container__input">
        {Array.from(props.word.word).map((char, index) => (
          <div key={`char_${index}`}>
            <input
              type="text"
              name={`char_${index}`}
              value={chars[`char_${index}`]}
              maxLength={1}
              readOnly
              style={{ width: width }}
            />
          </div>
        ))}
      </div>
      <div className="container__guess_char">
        <div>
          <h5>Guess a single character here!</h5>
        </div>
        <div>
          <input
            type="text"
            name="guessChar"
            ref={inputRef}
            autoFocus
            value={guessChar}
            onChange={update}
            maxLength={1}
          />
        </div>
      </div>
      <div className="btn-check">
        <button type="submit" onClick={matchChars}>
          Check
        </button>
      </div>
      <div>
        <b>{err}</b>
      </div>
    </div>
  );
};

export default Input;
