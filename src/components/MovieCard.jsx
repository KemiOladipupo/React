import { useState } from "react";
import heartFilled from "../assets/movies/heart-filled.jpg";
import heartOpen from "../assets/movies/heart-open.jpg";

function MovieCard({ title, description, image, rating }) {
  // First Method using Ternary Operator
  // const ratingClass =
  //   rating >=8 ? "text-bg-success"
  //   : rating >=5 ? "text-bg-warning"
  //   : "text-bg-danger";
  let ratingClass;
  let buttonColor;

  if (rating >= 8) {
    ratingClass = "text-bg-success";
    buttonColor = "btn btn-success";
  } else if (rating >= 5) {
    ratingClass = "text-bg-warning";
    buttonColor = "btn btn-warning";
  } else {
    ratingClass = "text-bg-danger";
    buttonColor = "btn btn-danger";
  }

  const clickTrailer = () => {
    alert(`${title} is Coming Soon!`);
  };
  const [hasLiked, setHasLiked] = useState(false);
  
  return (
    < >
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {description} </p>
          <p className="card-text">
            <span className={`badge rounded-pill ${ratingClass}`}>
              {" "}
              {rating}/10
            </span>
            <button onClick={() => setHasLiked(!hasLiked)}>
              {hasLiked ? (
                <img src={heartFilled} width={20} height={20} alt={title} />
              ) : (
                <img src={heartOpen} width={20} height={20} alt={title} />
              )}
            </button>
          </p>
          <button onClick={clickTrailer} className={buttonColor}>
            {" "}
            Watch Trailer
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
