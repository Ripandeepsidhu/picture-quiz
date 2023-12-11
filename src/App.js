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
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route,Routes } from "react-router-dom";


function App() {
  
  const questions = [
    {
      question: "Match the picture with the correct word",
      image: imageOne,
      options: ["Beer","Bare","Bear"],
      answer:3
    },
    {
      question: "Match the picture with the correct word",
      image: imageTwo,
      options: ["Fox","Box","Pox"],
      answer:1
    },
    {
      question: "Match the picture with the correct word",
      image: imageThree,
      options: ["Here","Hare","Hear"],
      answer:2
    },
    {
      question: "Match the picture with the correct word",
      image: imageFour,
      options: ["Cat","Bat","Rat"],
      answer:1
    },
    {
      question: "Match the picture with the correct word",
      image: imageFive,
      options: ["Bog","Log","Dog"],
      answer:3
    },
    {
      question: "Match the picture with the correct word",
      image: imageSix,
      options: ["Dear","Deer","Beer"],
      answer:2
    },
  ];
  
  return (<>
    <Header/>
    <Routes>
    <Route path="/QuizView" element={<QuizView/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    <div className="App">
       
    
     <QuizView questions={questions}/>
     
    </div>    </>
  );
};

export default App;
