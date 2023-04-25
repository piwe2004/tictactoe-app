import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({status, onClick}) => {
    
  const rnderSquart = (i) => {
    return <Square value={status[i]} onClick={()=>onClick(i)} />;
  };

  return (
    <div>
      <div className="board_row">
        {rnderSquart(0)}
        {rnderSquart(1)}
        {rnderSquart(2)}
      </div>
      <div className="board_row">
        {rnderSquart(3)}
        {rnderSquart(4)}
        {rnderSquart(5)}
      </div>
      <div className="board_row">
        {rnderSquart(6)}
        {rnderSquart(7)}
        {rnderSquart(8)}
      </div>
    </div>
  );
};

export default Board;
