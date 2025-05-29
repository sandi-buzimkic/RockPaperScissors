import { useState } from 'react';
import './App.css';

function App() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [shake, setShake] = useState(-1);

  const play = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(compChoice);

    if (choice === compChoice) {
      setResult("It's a draw!");
    } else if (
      (choice === 'Rock' && compChoice === 'Scissors') ||
      (choice === 'Paper' && compChoice === 'Rock') ||
      (choice === 'Scissors' && compChoice === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div className="App-header">
      <h1>Rock Paper Scissors</h1>
      <div>
        {choices.map((choice,index) => (
          <button className={shake === index 
            ? "shaking" : ""} key={choice} onClick={() => {play(choice); setShake(index); console.log(index)}}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        <p>Your choice: {playerChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
