import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem"

function App() {
  return (
    <>
      <Header text = { "title" }/>
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
