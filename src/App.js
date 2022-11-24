const App = () => {
  const title = "Blog post";
  const content = "blog post content";
  const comments = [
    { id: 1, comment: "comment one" },
    { id: 2, comment: "comment two" },
    { id: 3, comment: "comment three" },
  ];

  const showComments = true;
  const loader = false;

  if (loader) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h1> {title} </h1>
      <p> {content} </p>
      {showComments && (
        <div>
          <h5> Comments {comments.length}</h5>
          <ul>
            {comments.map((item, index) => {
              return <li key={index}>{item.comment}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default App;
