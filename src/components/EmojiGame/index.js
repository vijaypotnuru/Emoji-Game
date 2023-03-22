import './index.css'

import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    prevSelectedId: [],
    winOrLose: true,
    gameOver: false,
  }

  clickEmoji = id => {
    const {prevSelectedId, score} = this.state
    if (prevSelectedId.includes(id) === false) {
      if (score === 12) {
        this.setState({
          winOrLose: true,
          gameOver: true,
        })
      } else {
        this.setState(prevState => ({
          prevSelectedId: [...prevState.prevSelectedId, id],
          score: prevState.score + 1,
          topScore:
            prevState.score + 1 > prevState.topScore
              ? prevState.topScore + 1
              : prevState.topScore,
        }))
      }
    } else {
      this.setState({
        winOrLose: false,
        gameOver: true,
      })
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      prevSelectedId: [],
      score: 0,
      winOrLose: true,
      topScore: prevState.topScore,
      gameOver: false,
    }))
  }

  render() {
    const {score, topScore, gameOver, winOrLose} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = () => {
      emojisList.sort(() => Math.random() - 0.5)
      console.log(emojisList)
    }

    shuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        {!gameOver && (
          <ul className="emojis-card-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </ul>
        )}
        {gameOver && (
          <WinOrLoseCard
            winOrLose={winOrLose}
            score={score}
            playAgain={this.playAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
