// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackList from "./components/FeedbackList";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
// import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStat />
                  <FeedbackList />
                  <AboutIconLink />
                </div>
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
          {/* <Route path="/post/:id/:name" element={<Post />}/> */}
          {/* <Route path="/post" element={<Post />}/> */}
          {/* <Route path="/post/*" element={<Post />} /> */}
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
