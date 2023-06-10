import { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState(true);
  const [sentence, setSentence] = useState(false);
  const [highlight, setHighlight] = useState({});
  const [text, setText] = useState("");
  const [rephrase, setRephrase] = useState(false);

  const wordHandler = (e) => {
    setWord(true);
    setSentence(false);
    console.log(word, sentence)
  }

  const sentenceHandler = (e) => {
    setWord(false);
    setSentence(true);
    console.log(word, sentence)
  }
  const clickHandler = (e) => {
    e.preventDefault();
    setRephrase(true);
  }
  console.log(highlight)
  return (
    <div className="App">
      <h1>In Your Own Words</h1>
      <h2>What do you want to rephrasing?</h2>
      <input type='radio' id='word' name='type' onChange={wordHandler} checked={word} ></input>
      <label for="word">Word</label>
      <input type='radio' id='sentence' name='type' onChange={sentenceHandler} checked={sentence} ></input>
      <label for="sentence">Sentence</label>

      <h3>Please enter your text!</h3>
      <div className='flex'>
        <textarea rows={20} cols={50} onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={clickHandler}>Rephrasing</button>
        <div className='result'>
          {rephrase && text.split(" ").map((eachWord, index) =>
            <>
              <span style={highlight[index] ? { backgroundColor: "yellow" } : { backgroundColor: "white" }} onClick={() => setHighlight({ ...highlight, [index]: !highlight[index] })}>{eachWord}</span>
              <span> </span>
            </>
          )}
        </div >
      </div>
    </div>
  )

}

export default App;
