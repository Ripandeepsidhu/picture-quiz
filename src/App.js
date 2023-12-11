import './App.css';
import QuizView from './components/QuizView';
import imageOne from "./images/bear.jpg";
import imageTwo from "./images/fox.jpg";
import imageThree from "./images/hare.jpg";
import imageFour from "./images/cat.jpg";
import imageFive from "./images/dog.jpg";
import imageSix from "./images/deer.jpg";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Header from './components/Header';
import { Route,Routes } from "react-router-dom";


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
    
    <div  className='App'>
    <Header/>
    <Routes>
    <Route path="/" element={<home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <div className="game-container">
    <QuizView questions={questions}/>
     </div>
    </div>    </>
  );
};

export default App;
