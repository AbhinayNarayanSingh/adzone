import { reviewsData } from "@/store/staticStore";
import ReviewCards from "@/componentWrapper/cards/ReviewCards";

const Reviews = () => {
  return (
    <>
      <div className="heading-container">
        <p>Reviews</p>
        <p>Showing 1 - 8 of 8 results</p>
      </div>
      <div className="min-body-section-container">
        {reviewsData.map((review, index) => {
          return <ReviewCards key={"review__" + index} data={review} />;
        })}
      </div>
    </>
  );
};

export default Reviews;
