import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          className="game-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-bar-heading">Emoji Game</h1>
      </div>

      <div className="score-container">
        {!gameOver && (
          <>
            <p className="score-note">Score: {score}</p>
            <p className="score-note">Top Score: {topScore}</p>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar
