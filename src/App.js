import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className='game'>
      <div className='game_board'>
        <Board />
      </div>
      <div className='game_info'></div>
    </div>
  );
}

export default App;
