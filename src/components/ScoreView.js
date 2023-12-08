import React from "react";
import "./ScoreView.css";

const ScoreView = (props) => {
    
    return (
        <>
        <div>
            <p> Your score:{props.score} </p>
            <p>Total Score:{props.totalScore}</p>
            
        </div>
        <button id="try-button" onClick={props.tryAgain}>Try Again</button>
        </>
    );
};

export default ScoreView;