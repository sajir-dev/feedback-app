import { useState } from "react";

const FeedbackItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is the review with rating 7");

  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });

    setText("this is the rating after clicking the change")
  };

  return (
    <div className="card">
      <div className="num-display"> {rating} </div>
      <div className="text-display"> {text} </div>

      <button onClick={handleClick}>change</button>
    </div>
  );
};

export default FeedbackItem;
