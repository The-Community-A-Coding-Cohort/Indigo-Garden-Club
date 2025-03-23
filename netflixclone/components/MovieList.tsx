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
}

const MovieList: React.FC<MovieListProps> = ({ data }) => {
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
    <div className="px-4  mt-4 space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} data={movie} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
