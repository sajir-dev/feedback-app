import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ feedback }) => {

  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
      <div className="num-display"> {feedback.rating} </div>
      <button className="close" onClick={() => deleteFeedback(feedback.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display"> {feedback.text} </div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
