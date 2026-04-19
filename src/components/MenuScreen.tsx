import type { GameType } from '../types/game'

interface MenuScreenProps {
  onSelectGame: (gameType: GameType) => void
}

export function MenuScreen({ onSelectGame }: MenuScreenProps) {
  return (
    <div className="menu-screen">
      <h1 className="app-title">partyW</h1>
      <p className="menu-subtitle">Välj ett spel</p>

      <div className="game-options">
        <button className="game-button" onClick={() => onSelectGame('brainrot')}>
          🧠 Brainstorm
        </button>

        <button className="game-button" onClick={() => onSelectGame('charader')}>
          🎭 Charader
        </button>
      </div>
    </div>
  )
}