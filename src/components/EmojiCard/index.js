// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, clickOnEmoji} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickingEmoji = () => {
    clickOnEmoji(id)
  }
  return (
    <li>
      <button type="button" onClick={onClickingEmoji} className="emoji-card">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
