import './App.css';
import QuizView from './components/QuizView';
import Scoreview from './components/ScoreView';
import imageOne from "./images/bear.jpg";
import imageTwo from "./images/fox.jpg";
import imageThree from "./images/hare.jpg";
import imageFour from "./images/cat.jpg";
import imageFive from "./images/dog.jpg";
import imageSix from "./images/deer.jpg";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from 'react';


function App() {
    
  const questions = [
    {
      question: "Match the picture with the correct word",
      image: imageOne,
      answer: [
        { text: "beer" },
        { text: "bear", isCorrect: true },
        { text: "bare" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      image: imageTwo,
      answer: [
        { text: "fox", isCorrect: true },
        { text: "box" },
        { text: "pox" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      image: imageThree,
      answer: [
        { text: "here" },
        { text: "hare", isCorrect: true },
        { text: "hear" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      image: imageFour,
      answer: [
        { text: "cat", isCorrect: true },
        { text: "bat" },
        { text: "rat" },
      ],
    },
    {
      question: "Match the picture with the correct word",
      image: imageFive,
      answer: [
        { text: "bog" },
        { text: "log" },
        { text: "dog", isCorrect: true },
      ],
    },
    {
      question: "Match the picture with the correct word",
      image: imageSix,
      answer: [
        { text: "dear" },
        { text: "deer", isCorrect: true },
        { text: "beer" },
      ],
    },
  ];
  
  return (
    <div className="App">
       
     {/*<ScoreView/>*/}
     <QuizView questions={questions}/>
    </div>
  );
};

export default App;
