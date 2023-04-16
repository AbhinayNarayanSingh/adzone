import { STAR_FILLED, STAR_OUTLINE } from "@/Environment"
import Icon from "../image/Icon"

const ReviewCards = ({ data, key }) => {
  const { first_name, last_name, rating=5, review, timeStamp } = data

  const starCount = Math.round(rating)
  const starOutlineCount = 5 - starCount
  return (
    <div key={key} className="review-card-outer-container">
      <div className="review-card-container">
        <div>
          <h1 className="user-profile-character">{first_name[0]}</h1>
        </div>
        <div>
          <div className="user-name-timestamp">
            <h2>{first_name + " " + last_name}</h2>
            <span></span>
            <p>{timeStamp}</p>
          </div>
          <div>
            {[...Array(starCount)].map(() => {return <Icon src={STAR_FILLED}  size="1rem" />})}
            {[...Array(starOutlineCount)].map(() => <Icon src={STAR_OUTLINE}  size="1rem" />)}
          </div>
          {review && <p>{review}</p>}
        </div>
      </div>
    </div>
  )
}

export default ReviewCards