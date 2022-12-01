import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({handleFeedback}) => {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    let text = e.target.value;
    if (text === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage("Text must be atleast 10 characters");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
        const newFeedback = {
            text,
            rating
        }

        handleFeedback(newFeedback);
        setText("");
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            text={text}
          />
          <Button children="Submit" isDisabled={isDisabled} />
        </div>
        {message && <div className="message"> {message} </div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
