
import './App.css';
import QuizView from './components/QuizView';
import Scoreview from './components/ScoreView';

function App() {

  const questions = [
    {
      question: "Match the picture with the correct word",
      answer: [
        { text: "beer" },
        { text: "bear", isCorrect: true },
        { text: "bare" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      answer: [
        { text: "fox", isCorrect: true },
        { text: "box" },
        { text: "pox" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      answer: [
        { text: "here" },
        { text: "hare", isCorrect: true },
        { text: "hear" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      answer: [
        { text: "cat", isCorrect: true },
        { text: "bat" },
        { text: "rat" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      answer: [
        { text: "bog" },
        { text: "log" },
        { text: "dog", isCorrect: true },
      ],
    },
    {
      question: "Match the picture with the correct word",
      answer: [
        { text: "dear" },
        { text: "deer", isCorrect: true },
        { text: "beer" },
      ],
    },
  ];

  return (
    <div className="App">
     <Scoreview/>
    
    </div>
  );
}

export default App;
