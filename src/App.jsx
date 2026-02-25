import { useState } from 'react'

const wins = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

function checkWinner(board) {
  for (const [a,b,c] of wins) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a]
  }
  return null
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)

  const winner = checkWinner(board)
  const isDraw = !winner && board.every(Boolean)

  function click(i) {
    if (board[i] || winner) return
    const next = [...board]
    next[i] = xTurn ? 'X' : 'O'
    setBoard(next)
    setXTurn(!xTurn)
  }

  function reset() {
    setBoard(Array(9).fill(null))
    setXTurn(true)
  }

  let status
  if (winner) status = `${winner} wins!`
  else if (isDraw) status = "It's a draw"
  else status = `${xTurn ? 'X' : 'O'}'s turn`

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center px-4">
      <p className="text-gray-600 text-xs uppercase tracking-widest mb-8">Tic Tac Toe</p>

      <p className={`text-lg font-medium mb-6 ${winner ? 'text-emerald-400' : isDraw ? 'text-amber-400' : 'text-gray-300'}`}>
        {status}
      </p>

      <div className="grid grid-cols-3 gap-2 mb-8">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => click(i)}
            className={`w-24 h-24 rounded-2xl text-3xl font-bold border transition-colors ${
              cell === 'X'
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : cell === 'O'
                ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                : 'bg-white/3 border-white/8 hover:bg-white/8'
            }`}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={reset}
        className="bg-white text-black px-8 py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        New Game
      </button>
    </div>
  )
}
