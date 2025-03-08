import React from "react";
import {isEmpty} from 'lodash';

interface MovieListProps {
    data: Record<string, any>[];
    title: string;
}
const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {
    if(isEmpty(props.data)){
        return null;
    }
    return (
        <div className="px-4 md:px-12 mt-4 space-y-8">
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                {props.title}
            </p>
            <div>
                
            </div>
        </div>
    )
}
export default MovieList;