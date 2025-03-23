import React from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "../hooks/useInfoModal";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";

interface Movie {
  id: string;
  thumbnailUrl: string;
  duration: string;
  genre: string;
}

interface MovieCardProps {
  data: Movie;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ data, title }) => {
  const router = useRouter();

  return (
    <div className="cursor-pointer flex-col flex">
      <div className="group bg-zinc-900 col-span relative w-[100%] h-[100%] aspect-[2/3]">
        <Image
          className="object-contain transition duration-200 group-hover:opacity-80"
          src={data?.thumbnailUrl}
          alt="Thumbnail"
          fill
          style={{ objectFit: "cover" }}
          //   onClick={() =>
          //     router.push(`/watch/${data?.id}`, {
          //       query: {
          //         title: title,
          //       },
          //     })
          //   }
        />

        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 z-10"
          onClick={() =>
            router.push({
              pathname: `/watch/${data?.id}`,
              query: {
                title: title,
                thumbnailUrl: data?.thumbnailUrl,
              },
            })
          }
        >
          <div className="bg-black bg-opacity-70 rounded-full p-4 cursor-pointer">
            <BsFillPlayFill className="text-white" size={30} />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 text-white text-xs rounded z-10">
          {data?.duration}
        </div>
      </div>
      <div className="p-1 text-white relative">
        <p className="text-md truncate">{title}</p>
      </div>
    </div>
  );
};
export default MovieCard;
