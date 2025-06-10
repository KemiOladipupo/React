import { useState } from "react";
import heartFilled from '../assets/movies/heart-filled.jpg' ;
import heartOpen from '../assets/movies/heart-open.jpg' ;

function MovieCard({ title, description, image, rating }) {
    const ratingClass = "text-bg-danger";
    const [hasLiked, setHasLiked] = useState(false)
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text"> {description} </p>
          <p className="card-text"> 
                <span className={`badge rounded-pill ${ratingClass}`}> {rating}/10</span>
                <button onClick={ () => setHasLiked(!hasLiked)}>
                    {hasLiked ? <img src={heartFilled} width={20} height={20} alt={title} /> : <img src={heartOpen} width={20} height={20} alt={title} />}
                    </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
