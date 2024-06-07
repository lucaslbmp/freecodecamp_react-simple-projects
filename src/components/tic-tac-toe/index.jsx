import { useEffect, useState } from "react";
import "./styles.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const winnerResults = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [winner, setWinner] = useState();

  function handleClick([i]) {
    // let newBoard = board;
    // newBoard[i][j] = isXTurn ? "X" : "O"
    setBoard((lastBoard) => {
      if (!lastBoard[i]) {
        lastBoard[i] = isXTurn ? "X" : "O";
        setIsXTurn((state) => !state);
        checkWinner();
        return lastBoard;
      } else return lastBoard;
    });
  }

  function checkWinner() {
    const winningIndexes = [...winnerResults]
      ?.map(
        (indexes) =>
          indexes.map((index) => (board[index] !== "" ? index : undefined))

        //.filter(indexes => indexes.includes(undefined))
        //?.at(0)
      )
      .filter(
        (indexes) =>
          !indexes.includes(undefined) 
          && indexes.every((el) => board[el] === board[indexes[0]])
      )
      ?.at(0);
    console.log(winningIndexes);
    if(winningIndexes)
        highlightResult(winningIndexes)
  }

  function Square({ index, onClick }) {
    return (
      <div 
      id={`square-${index}`} 
      className="square"
       onClick={onClick}>
        {board[index]}
      </div>
    );
  }

  function highlightResult(indexes){
    console.log(indexes)
    indexes?.forEach(index => {
        console.log(index)
       const el =  document.querySelector(`#square-${index}`);
       el?.classList.add('highlight');
    });
    //
  }

  useEffect(() => {
    checkWinner();
  }, [...board]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square onClick={() => handleClick([0])} index={0} />
        <Square onClick={() => handleClick([1])} index={1} />
        <Square onClick={() => handleClick([2])} index={2} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick([3])} index={3} />
        <Square onClick={() => handleClick([4])} index={4} />
        <Square onClick={() => handleClick([5])} index={5} />
      </div>
      <div className="row">
        <Square onClick={() => handleClick([6])} index={6} />
        <Square onClick={() => handleClick([7])} index={7} />
        <Square onClick={() => handleClick([8])} index={8} />
      </div>
    </div>
  );
}
