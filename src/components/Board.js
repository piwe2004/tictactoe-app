import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

    rnderSquart(i){
        return <Square />
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
