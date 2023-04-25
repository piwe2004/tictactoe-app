import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(null),
            nowPlayer : 'X'
        }
    }

    handleClick(i){
        if(this.state.squares[i] === null){
            const squares = this.state.squares.slice();
            squares[i] = this.state.nowPlayer = this.state.nowPlayer === 'O' ? 'X' : "O"
            this.setState({squares:squares})
        }else{
            alert('이미 선택된 자리입니다.')
        }
        
    }

    rnderSquart(i){
        return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />
    }

    render() {
        return (
            <div>
                <div className='status'>Next Player: {this.state.nowPlayer === 'X' ? 'O':'X'}</div>
                <div className='board_row'>
                    {this.rnderSquart(0)}
                    {this.rnderSquart(1)}
                    {this.rnderSquart(2)}
                </div>
                <div className='board_row'>
                    {this.rnderSquart(3)}
                    {this.rnderSquart(4)}
                    {this.rnderSquart(5)}
                </div>
                <div className='board_row'>
                    {this.rnderSquart(6)}
                    {this.rnderSquart(7)}
                    {this.rnderSquart(8)}
                </div>
            </div>
        )
    }
}
