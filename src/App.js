import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackList from "./components/FeedbackList";
import About from "./pages/About";
import AboutIconLink from './components/AboutIconLink';
import Post from "./components/Post";

function App() {
  const [feedback, setFeedbacks] = useState(FeedbackData);

  const handleDelete = (id) => {
    setFeedbacks(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="container">
                <FeedbackForm handleFeedback={addFeedback} />
                <FeedbackStat feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete} />
                <AboutIconLink />
              </div>
            </>
          }
        ></Route>
        <Route path="/about" element={<About />}/>
        {/* <Route path="/post/:id/:name" element={<Post />}/> */}
        {/* <Route path="/post" element={<Post />}/> */}
        <Route path="/post/*" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
