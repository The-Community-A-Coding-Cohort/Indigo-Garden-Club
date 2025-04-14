import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface Movie {
  id: string;
  thumbnailUrl: string;
  duration: string;
  genre: string;
  title: string;
}

interface MovieListProps {
  data: Movie[] | { [key: string]: Movie }; // Accept either an array or an object with movie values.
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  let movies: Movie[] = [];

  if (Array.isArray(data)) {
    movies = data;
  } else if (typeof data === "object") {
    movies = Object.values(data);
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} title={movie.title}/>
        ))}
      </div>
    </div>
  );
};

export default MovieList;