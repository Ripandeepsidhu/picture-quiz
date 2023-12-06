import React from "react";
import "./QuizView.css";

const QuizView = ({questions}) => {
    return (
    <>
        <div className="question">
            <div className="question-number">
                <span> Question 1 / {questions.length} </span>
            </div>
            <div className="question-text"> 
                {questions.question}
            </div> 
                {questions.image && (
            <img src={questions.image} alt={`Question ${1}`} />
        )}
        </div>


        <div className="answer">
            {questions[0].answer.map(({ text, isCorrect })=> (
                <button key={text}>{text}</button>
            )) }
        </div>
    </>
    )
};

export default QuizView;
