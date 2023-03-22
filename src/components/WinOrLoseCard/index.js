import './index.css'

const WinOrLoseCard = props => {
  const {winOrLose, score, playAgain} = props

  const onPlayAgain = () => {
    playAgain()
  }

  const imgUrl = winOrLose
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultText = winOrLose ? 'You Won' : 'You Lose'
  const scoreText = winOrLose ? 'Best Score' : 'Score'

  const scores = winOrLose ? `12/12` : `${score}/12`
  return (
    <div className="winOrLose-card-container">
      <img className="win-or-lose-image" src={imgUrl} alt="win or lose" />
      <div className="result-container">
        <h1 className="result-heading">{resultText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="scores">{scores}</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
