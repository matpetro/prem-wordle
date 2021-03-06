import React from "react";

function GamePopUp(props){
    return (
        <div className="modal">
            <div className="modal--content">
                <span className="close" onClick={props.onClose}>
                    &times;
                </span>
                <div className="popup--info">
                    <h1>{props.won ? "You Won!" : "You Lost :("}</h1>
                    <h3>Correct Player:</h3>
                    <p>{props.correctPlayer.name}</p>
                    <button className="restart--button" onClick={props.playAgain}>Play Again</button>
                </div>
                
            </div>
        </div>
    );
};

export default GamePopUp;