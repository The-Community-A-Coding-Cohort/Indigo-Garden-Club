import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import OptimizedImage from "./OptimizedImage";

interface Movie {
  id: string;
  thumbnailUrl: string;
  duration: string;
  genre: string;
}

interface MovieCardProps {
  data: Movie;
  title: string;
  isPriority?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  data,
  title,
  isPriority = false,
}) => {
  const router = useRouter();

  const [timer, setTimer] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(find_timer());
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const find_timer = () => {
    const now = new Date();
    const nextThursday = new Date();
    nextThursday.setDate(now.getDate() + ((4 + 7 - now.getDay()) % 7));
    nextThursday.setHours(19, 0, 0, 0); // Set to 7 PM CST

    const diff = nextThursday.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return `${days.toString().padStart(2, "0")}:${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full ">
      <div className="text-white text-2xl font-bold instrument">This week:</div>
      <div className="cursor-pointer  flex  w-full justify-items-start">
        <div
          className="group bg-zinc-900 relative w-full aspect-[2/3] overflow-hidden max-w-[360px] h-full"
          style={{ aspectRatio: "2/3" }} // Enforce aspect ratio via inline style as a fallback
        >
          <OptimizedImage
            className="object-cover transition duration-200 group-hover:opacity-80"
            src={data?.thumbnailUrl}
            alt="Thumbnail"
            fill
            priority={isPriority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            loading={isPriority ? "eager" : "lazy"}
            style={{ objectFit: "cover" }}
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
            {/* <div className="bg-black bg-opacity-70 rounded-full p-4 cursor-pointer">
            <BsFillPlayFill className="text-white" size={30} />
          </div> */}
          </div>

          {/* Duration badge */}
          {/* <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 text-white text-xs rounded z-10">
          {data?.duration}
        </div> */}
        </div>
        <div className="p-1 text-white relative w-full max-w-[500px]">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <p className="text-3xl xl:text-6xl instrument p-2 leading-[95%]">
                3 short films
              </p>

              <div className="pl-2 text-lg xl:text-xl space-container">
                <span>Runtime</span>
                <hr className="border-b-3 white" />
                <span>94 min</span>
              </div>
              <div className="pl-2 text-lg xl:text-xl space-container">
                <span>Genre</span>
                <hr className="border-b-3 white" />
                <span>Horror</span>
              </div>
              <div className="pl-2 text-lg xl:text-xl space-container">
                <span>Rating</span>
                <hr className="border-b-3 white" />
                <span>18+</span>
              </div>
              <div className="pl-2 text-lg xl:text-xl space-container">
                <span>Origin</span>
                <hr className="border-b-3 white" />
                <span>Midwest</span>
              </div>
              <div className="pl-2 text-lg xl:text-xl space-container">
                <span>Price</span>
                <hr className="border-b-3 white" />
                <span>$4</span>
              </div>
              <div className="pl-2 text-lg xl:text-xl">
                100% of opening night proceeds go directly to artists.
              </div>

              <div className="pl-2 text-lg xl:text-xl tabular-nums">
                Thursday, April 10th at 7:00 PM ({timer})
              </div>
              <input
                type="text"
                className="pl-2 ml-2 mt-2 mb-2 text-lg lg:text-xl border-1 border-white "
                placeholder="Stay in the know (email or number)"
              />
            </div>

            <div className="flex flex-col">
              <div className="pl-2 text-lg xl:text-xl instrument">
                1: &quot;Frank gets caught in the middle of Gus&apos;s
                supernatural couples drama.&quot;
              </div>
              <div className="pl-2 text-lg xl:text-xl instrument">
                2: &quot;Frank can&apos;t nail this dance, but dancing might
                just save her life.&quot;
              </div>
              <div className="pl-2 text-lg xl:text-xl instrument">
                3: &quot;A little horror, a little dance, and little tea.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
