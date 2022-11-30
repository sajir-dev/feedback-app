import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat"
import FeedbackData from "./data/FeedbackData"

function App() {

  const [feedbacks, setFeedbacks] = useState(FeedbackData)

  const handleDelete = (id) => {
    setFeedbacks(feedbacks.filter(feedback => feedback.id !== id ))
  }

  return (
    <>
      <Header text={"title"} />
      <div className="container">
        <FeedbackStat feedbacks={feedbacks}/>
        <FeedbackList feedbacks = {feedbacks} handleDelete = {handleDelete} />
      </div>
    </>
  );
}

export default App;
