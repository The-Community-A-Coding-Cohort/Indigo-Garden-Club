import React from "react";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";
import Head from "next/head";

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

  // Get the first 4 movies for preloading
  const topMovies = movies.slice(0, 4);

  return (
    <>
      <Head>
        {/* Preload critical images */}
        {topMovies.map((movie) => (
          <link
            key={`preload-${movie.id}`}
            rel="preload"
            href={movie.thumbnailUrl}
            as="image"
            type="image/webp"
          />
        ))}
      </Head>
      <div className="xl:px-8 px-4 mt-4 space-y-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
          {movies.slice(0, 2).map((movie, index) => (
            <div key={movie.id} className="w-full">
              <MovieCard
                data={movie}
                title={movie.title}
                isPriority={index < 4} // Only set priority for the first 4 movies
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
