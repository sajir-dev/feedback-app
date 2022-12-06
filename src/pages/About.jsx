import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h3>About</h3>
          <p>
            This is a react project to submit feedback about a product/service
          </p>
          <Link to="/">Back to home</Link>
        </div>
      </Card>
    </div>
  );
};

export default About;
