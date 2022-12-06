import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStat = () => {
  const {feedback} = useContext(FeedbackContext)
  let avgRating = feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length

  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Ratings</h3>
      <h3>Averge Rating: {isNaN(avgRating) ? 0 : avgRating}</h3>
    </div>
  );
};

export default FeedbackStat;
