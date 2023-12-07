import React, { useState } from "react";
import "./QuizView.css";
import ScoreView from "./ScoreView";

const QuizView = ({questions}) => {
    const [currentImage,setCurrentImage] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedOption,setClickedOption]= useState(0);
    const [score, setScore] = useState(0);
    const changeQuestion = () => {
        updateScore();
        if(currentQuestion<questions.length-1)
        
        setCurrentQuestion(currentQuestion+1)
        changeImage();
        
    }
    const changeImage = () => {
      if(currentQuestion<questions.length-1)
      setCurrentImage(currentImage+1)
  }
  const updateScore =()=> {
    if(clickedOption===questions[currentQuestion].isCorrect)
    setScore(score+1)
  }
    return (
    <>
    <img className='picture' src={questions[currentImage].image} alt="Bear" />
        <div className="question">
            <div className="question-number">
                <span> {currentQuestion+1}. / {questions.length} </span>
            </div>
            <div className="question-text"> 
                {questions[currentQuestion].question}
            </div> 
            {questions.image && (
            <img src = {[currentImage]} alt={`Question ${currentQuestion}`} />
        )}
        </div>


        <div className="answer">
            {questions[currentQuestion].answer.map(({ text, isCorrect })=>{return (
                <button onClick={() => setClickedOption(text+1)} key={text}>{text}</button>
            )}) }
        </div>
        <input onClick={changeQuestion} type="button" value= "Next" id="next-button"/>
    </>
    )
};

export default QuizView;