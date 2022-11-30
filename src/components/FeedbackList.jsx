import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedbacks yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((item) => (
        <FeedbackItem key={item.id} feedback={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

FeedbackList.propType = {
    feedbacks: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    })
}

export default FeedbackList;
