// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playagin} = props
  const isScoreEqualTo12 = score === 12
  const onClickingPlayAgain = () => {
    playagin()
  }
  return (
    <div className="win-lose-card">
      <div className="win-lose-content-card">
        {isScoreEqualTo12 && (
          <h1 className="win-lose-card-You-Win-style">You Won</h1>
        )}
        {!isScoreEqualTo12 && (
          <h1 className="win-lose-card-You-Win-style">You Lose</h1>
        )}
        {isScoreEqualTo12 && (
          <p className="win-lose-card-score-heading-style">Best Score</p>
        )}
        {!isScoreEqualTo12 && (
          <p className="win-lose-card-score-heading-style">Score</p>
        )}

        <p className="win-lose-card-score-style">{score}/12</p>
        <button
          className="win-lose-card-button-style"
          onClick={onClickingPlayAgain}
          type="button"
        >
          Play Again
        </button>
      </div>

      {isScoreEqualTo12 && (
        <img
          className="win-lose-image-style"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      )}
      {!isScoreEqualTo12 && (
        <img
          className="win-lose-image-style"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
