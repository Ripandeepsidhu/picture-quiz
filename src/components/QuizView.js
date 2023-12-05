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
        </div>


        <div className="answer">
            {questions[1].answer.map(({ text, isCorrect })=> (
                <button key={text}>{text}</button>
            )) }
        </div>
    </>
    )
};

export default QuizView;
