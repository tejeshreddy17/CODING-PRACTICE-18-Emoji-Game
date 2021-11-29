/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.s

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import './index.css'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, totalScore: 0, ClickedEmojiIds: [], resultDisplay: false}

  clickOnEmoji = id => {
    console.log(id)
    const {ClickedEmojiIds, score, totalScore} = this.state

    this.setState(prevstate => ({
      ClickedEmojiIds: [...prevstate.ClickedEmojiIds, id],
    }))

    if (!ClickedEmojiIds.includes(id)) {
      this.setState(prevstate => ({
        score: prevstate.score + 1,
        displayScore: prevstate.score + 1,
      }))
    } else if (score > totalScore) {
      this.setState(prevstate => ({
        score: 0,
        totalScore: prevstate.score,
        ClickedEmojiIds: [],
        resultDisplay: true,
        displayScore: prevstate.score,
      }))
    } else {
      this.setState(prevstate => ({
        score: 0,
        totalScore: prevstate.totalScore,
        ClickedEmojiIds: [],
        resultDisplay: true,
        displayScore: prevstate.score,
      }))
    }
  }

  playagin = () => {
    const {score} = this.state
    if (score === 12) {
      this.setState(prevstate => ({
        resultDisplay: false,
        score: 0,
        totalScore: prevstate.score,
        ClickedEmojiIds: [],
      }))
    } else {
      this.setState({resultDisplay: false})
    }
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    // const {emojisList} = this.props
    const {score, totalScore, resultDisplay, displayScore} = this.state
    return (
      <div className="background-container">
        <NavBar
          resultDisplay={resultDisplay || score === 12}
          score={score}
          totalScore={totalScore}
        />
        {!(resultDisplay || score === 12) && (
          <div className="emoji-container">
            {shuffledEmojisList().map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emoji={eachEmoji}
                clickOnEmoji={this.clickOnEmoji}
              />
            ))}
          </div>
        )}
        {(resultDisplay || score === 12) && (
          <div className="emoji-container">
            <WinOrLoseCard playagin={this.playagin} score={displayScore} />
          </div>
        )}
      </div>
    )
  }
}
export default EmojiGame
