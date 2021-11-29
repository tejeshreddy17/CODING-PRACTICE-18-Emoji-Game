// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, resultDisplay} = props
  return (
    <nav className="navbar-container">
      <div className="logo-style">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-heading-style">Emoji Game</h1>
      </div>
      {!resultDisplay && (
        <div className="score-box">
          <p className="score-style">Score: {score}</p>
          <p className="total-score-style"> Top Score: {totalScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
