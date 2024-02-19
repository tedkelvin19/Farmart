import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-danger">404: Oops! Page Not Found!</h1>
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
