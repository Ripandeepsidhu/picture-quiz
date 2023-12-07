import React from "react";
import "./ScoreView.css";

const ScoreView = () => {
    const [score, setScore] = useState(0);
    const updateScore =()=> {
        
    }
    return (
        <div>
            <p> You score 1 out of 6 </p>
            <button> Reset </button>
        </div>
    );
};

export default ScoreView;