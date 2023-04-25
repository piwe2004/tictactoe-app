import React, { useState } from 'react'
import Square from './Square'
import "./Board.css"

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
        const newSquares = squares.slice();
        newSquares[i] = 'X'
        setSquares(newSquares)
        
    }

    const rnderSquart = (i) => {
        return <Square value={squares[i]} onClick={()=>handleClick(i)} />
    }

    return (
        <div>
            <div className='status'>Next Player: X, O</div>
            <div className='board_row'>
                {rnderSquart(0)}
                {rnderSquart(1)}
                {rnderSquart(2)}
            </div>
            <div className='board_row'>
                {rnderSquart(3)}
                {rnderSquart(4)}
                {rnderSquart(5)}
            </div>
            <div className='board_row'>
                {rnderSquart(6)}
                {rnderSquart(7)}
                {rnderSquart(8)}
            </div>
        </div>
    )
}

export default Board