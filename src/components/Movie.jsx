import { useState } from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "My Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 4.0,
    image:
      "https://media.istockphoto.com/id/2168660249/photo/group-of-friends-enjoying-a-movie-night-together.jpg?s=612x612&w=is&k=20&c=nTSGd2eQCHSODSM5iBIBAVhbSVl4BVr6XTdYHYXSok8=",
  },

  {
    title: "My Second Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 6.0,
    image:
      "https://media.istockphoto.com/id/1150354275/photo/happy-family-watching-a-comedy-film-at-the-cinema.jpg?s=612x612&w=is&k=20&c=0FXKxF7w_8iwwxHc3DA1K5ISF_llrjwBQl50y3tegOo=",
  },

  {
    title: "My Third Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 6.0,
    image:
      "https://media.istockphoto.com/id/1863925369/photo/happy-group-of-asian-family-and-grandmother-relax-and-go-to-cimema-in-movie-theater.jpg?s=612x612&w=is&k=20&c=ClXlJDmurjmqAV4gw97y8vPYNENF9A3FC3_bEGNYnjA=",
  },

  {
    title: "My Fourth Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 8.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "My Fourth Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 8.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "My Fourth Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 8.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "My Fourth Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 8.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },

  {
    title: "My Fourth Card",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quisquam placeat autem incidunt!",
    rating: 8.0,
    image:
      "https://media.istockphoto.com/id/1406127371/photo/women-wearing-3d-glasses-watching-a-movie-and-her-giant-popcorn-3d-render-illustration.jpg?s=612x612&w=is&k=20&c=vMijO3FBZvS5sm7D89DAjEBrqj2XZEtN8lzIGHQP_aA=",
  },
];

function Movie() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="container mt-8">
      <h2 className="mt-4"> Movie List </h2>
      <div className="d-flex flex-wrap">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie"
            className="form-control"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-4 col-lg-3 mb-4"
                key={index}
              >
                {movie.title.toLowerCase().startsWith(searchQuery) && (
                  <MovieCard
                    key={index}
                    title={movie.title}
                    description={movie.description}
                    rating={movie.rating}
                    image={movie.image}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movie;
