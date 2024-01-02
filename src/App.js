import "./App.css";
import QuizView from "./components/QuizView";
import imageOne from "./images/bear.jpg";
import imageTwo from "./images/fox.jpg";
import imageThree from "./images/hare.jpg";
import imageFour from "./images/cat.jpg";
import imageFive from "./images/dog.jpg";
import imageSix from "./images/deer.jpg";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/Button.css";
import { useState } from "react";

const questions = [
  {
    question: "Match the picture with the correct word",
    image: imageOne,
    options: ["Beer", "Bare", "Bear"],
    answer: 3,
  },
  {
    question: "Match the picture with the correct word",
    image: imageTwo,
    options: ["Fox", "Box", "Pox"],
    answer: 1,
  },
  {
    question: "Match the picture with the correct word",
    image: imageThree,
    options: ["Here", "Hare", "Hear"],
    answer: 2,
  },
  {
    question: "Match the picture with the correct word",
    image: imageFour,
    options: ["Cat", "Bat", "Rat"],
    answer: 1,
  },
  {
    question: "Match the picture with the correct word",
    image: imageFive,
    options: ["Bog", "Log", "Dog"],
    answer: 3,
  },
  {
    question: "Match the picture with the correct word",
    image: imageSix,
    options: ["Dear", "Deer", "Beer"],
    answer: 2,
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          
            <Header />
            <div>
            <Routes>
              <Route path="/" element={<QuizView questions={questions} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<PrivateRoute />} />
            </Routes>
              </div>
            </div> 
          
        
      </BrowserRouter>
    </>
  );
}

export default App;

/*
<div className="App">
        <div className="container">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <QuizView questions={questions} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>

            <div className={darkMode ? "dark-mode" : "light-mode"}>
              <div className="game-container">
                <div className="switch-checkbox">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className="slider round"> </span>
                  </label>
                </div>
              </div>

            </div>
          </BrowserRouter>
        </div>
      </div> */
