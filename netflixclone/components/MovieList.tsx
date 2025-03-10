import React from "react";
import {isEmpty} from 'lodash';
<<<<<<< HEAD
=======
import MovieCard from "./MovieCard";
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
}
const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {
<<<<<<< HEAD
    if(isEmpty(props.data)){
=======
    if(isEmpty(props?.data)){
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)
        return null;
    }
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                {props.title}
            </p>
<<<<<<< HEAD
            <div>
                
=======
            <div className="grid grid-cols-4 gap-2">
                {props.data.map((movie) => (
                    <MovieCard key={movie.id} data={movie} />
                ))}
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)
            </div>
        </div>
    )
}
export default MovieList;