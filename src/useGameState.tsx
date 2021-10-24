/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = 'X' | 'O'

const useGameState = () => {
  
  const [stepNumber, setStepNumber] = useState(0); 
  const [startPlayer, setStartPlayer] = useState<Player>('X');
  const [nextPlayer, setNextPlayer] = useState<Player>('X');
  const [currentBoard, setCurrentBoard] = useState(Array(9).fill(null));

  const resetBoard = () => {
    const nextStartingPlayer = startPlayer === 'X' ? 'O' :'X'
    setCurrentBoard([])   
    setStepNumber(0)      
    setStartPlayer(nextStartingPlayer)  
    setNextPlayer(nextStartingPlayer)
  }

  const computeMove = (nextPlayer: Player, squareId: any) => {
 
    if (nextPlayer === 'X') {
      setNextPlayer('O')      
    } else {
      setNextPlayer('X')
    }
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  }
  
  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove,
    resetBoard,
    startPlayer
  }
}

export default useGameState;
