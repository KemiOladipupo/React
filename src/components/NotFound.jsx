import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h2 className="display-4 text-danger"> 404! </h2>
      <h2 className="lead"> Sorry! It seems you're lost </h2>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
