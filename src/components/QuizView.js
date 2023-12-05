import React from "react";

const QuizView = () => {
    return (
    <>
        <div className="question">
            <div className="question-number">
                <span> Question 1 /5 </span>
            </div>
            <div className="question-text"> 
                Match the picture with the correct word
            </div>
        </div>


        <div className="answer">
            <button></button>
            <button></button>
            <button></button>
        </div>
    </>
    )
};

export default QuizView;
