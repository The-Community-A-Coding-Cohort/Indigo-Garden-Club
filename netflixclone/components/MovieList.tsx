import React from "react";
import {isEmpty} from 'lodash';
import MovieCard from "./MovieCard";

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {
    if(isEmpty(props?.data)){
        return null;
    }
    
    let movies: Record<string, any>[] = [];

    if (Array.isArray(props.data)) {
        movies = props.data;
      } else if (props.data && typeof props.data === "object") {
        movies = Object.values(props.data);
      }

    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                {props.title}
            </p>
            <div className="grid grid-cols-4 gap-2">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} data={movie} />
                ))}
            </div>
        </div>
    )
}
export default MovieList;