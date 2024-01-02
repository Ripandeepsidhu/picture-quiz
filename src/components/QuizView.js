import React, { useState } from "react";
import "./QuizView.css";
import ScoreView from "./ScoreView";

const QuizView = ({questions}) => {
    const [currentImage,setCurrentImage] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedOption,setClickedOption]= useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult]= useState(false);
    
    const changeQuestion = () => {
        updateScore();
        if(currentQuestion<questions.length-1){
        setCurrentQuestion(currentQuestion+1)
        changeImage();
        setClickedOption(0);  
        }else{
        setShowResult(true)
        }}
    const backQuestion =()=>{
        if(currentQuestion<questions.length-1){
            setCurrentQuestion(currentQuestion+1)
            backImage();

        }
    }
    const changeImage = () => {
        if(currentQuestion<questions.length-1)
        setCurrentImage(currentImage+1)
         }
         const backImage = () => {
            if(currentQuestion>questions.length+1)
            setCurrentImage(currentImage-1)
             }

    const updateScore =()=> {
        if(clickedOption===questions[currentQuestion].answer)
        setScore(score+1)
        }
 
    const resetAll =()=>{
        setShowResult(false);
        setClickedOption(0);
        setScore(0);
        setCurrentImage(0);
        setCurrentQuestion(0);
    }
    return (
    <div className="game-container">
    {showResult?
    (
        <ScoreView score={score} totalScore={questions.length} tryAgain={resetAll}/>
    ):(
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
            {questions[currentQuestion].options.map((option,i)=>{return (
                <button className={clickedOption===i+1?"checked":null} 
                onClick={() => setClickedOption(i+1)} key={i}>
                    {option}
                </button>
            )}) }
        </div>
        <div className="buttons">
        <input onClick={changeQuestion} type="button" value= "Next" id="next-button"/>
       <input onClick={backQuestion} type="button" value= "Back" id="next-button"/>
       </div>
    </>)}
    
</div>
    )}

export default QuizView;