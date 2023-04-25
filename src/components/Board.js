import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(null)
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares:squares})
    }

    rnderSquart(i){
        return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)} />
    }

    render() {
        return (
            <div>
                <div className='status'>Next Player: X, O</div>
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
