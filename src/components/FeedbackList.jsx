import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedbacks yet</p>;
  }

  return (
    // <div className="feedback-list">
    //   {feedback.map((item) => (
    //     <FeedbackItem key={item.id} feedback={item} handleDelete={handleDelete} />
    //   ))}
    // </div>
      <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
          >
            <FeedbackItem key={item.id} feedback={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propType = {
    feedback: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    })
}

export default FeedbackList;
