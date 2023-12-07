import React, { useState } from "react";
import "./QuizView.css";

const QuizView = ({questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
   
    const [clickedOption,setClickedOption]= useState(0);
    const changeQuestion = () => {
        if(currentQuestion<questions.length-1)
        setCurrentQuestion(currentQuestion+1)
    }
    return (
    <>
        <div className="question">
            <div className="question-number">
                <span> {currentQuestion+1}. / {questions.length} </span>
            </div>
            <div className="question-text"> 
                {questions[currentQuestion].question}
            </div> 
                {questions.image && (
            <img src={questions.image} alt={`Question ${1}`} />
        )}
        </div>


        <div className="answer">
            {questions[currentQuestion].answer.map(({ text, isCorrect })=> (
                <button onClick={() => setClickedOption(i+1)} key={text}>{text}</button>
            )) }
        </div>
        <input onClick={changeQuestion} type="button" value= "Next" id="next-button"/>
    </>
    )
};

export default QuizView;