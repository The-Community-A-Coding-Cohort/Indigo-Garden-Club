import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft, AiOutlineShareAlt } from "react-icons/ai";
import { BiCalendar, BiTimeFive, BiCategory } from "react-icons/bi";
import MuxPlayerReact from "@mux/mux-player-react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import prismadb from "../../lib/prismadb";
import mux from "@mux/mux-node";

interface WatchProps {
  movie: {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    genre: string;
    duration: string;
  } | null;
  asset_data?: {
    playback_ids: { id: string }[];
  };
}

const Watch = ({ movie, asset_data }: WatchProps) => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)]">
      {/* Navigation */}
      <nav className="w-full p-4 flex flex-row items-center gap-2 bg-opacity-90 backdrop-blur-sm sticky top-0 z-20">
        <AiOutlineArrowLeft
          onClick={() => router.push("/")}
          className="cursor-pointer"
          size={24}
        />
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* Left Column - Movie Poster */}
          <div className="md:col-span-1">
            <div className="relative aspect-[2/3] w-full overflow-hidden">
              <Image
                src={movie?.thumbnailUrl || ""}
                priority
                alt={movie?.title || "Movie"}
                fill
                className="object-cover"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  const playerEl = document.getElementById("movie-player");
                  if (playerEl) playerEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-[#AF7675] hover:bg-[#b68281] text-white p-3 font-medium rounded-sm transition"
              >
                Watch Now
              </button>

              <div className="flex gap-2 mt-2">
                <button className="flex-1 border border-gray-400 hover:bg-gray-400 p-2 rounded-sm flex items-center justify-center gap-1">
                  <AiOutlineShareAlt size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Movie Metadata */}
            <div className="mt-6 border-t border-gray-200 pt-4 space-y-3">
              <div className="flex items-center gap-2">
                <BiCategory className="text-gray-500" size={20} />
                <span>{movie?.genre}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiTimeFive className="text-gray-500" size={20} />
                <span>{movie?.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiCalendar className="text-gray-500" size={20} />
                <span>Added {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Description & Player */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold instrument mb-4">
              {movie?.title || ""}
            </h1>

            <div className="prose max-w-none mb-8">
              <p className="text-lg leading-relaxed">
                {movie?.description || "No description available."}
              </p>
            </div>

            {/* Video Player */}
            <div
              id="movie-player"
              className="mt-8 border border-gray-200 rounded-md overflow-hidden"
            >
              <h2 className="instrument text-xl px-4 py-2 border-b border-gray-200">
                Watch Preview
              </h2>
              <div className="aspect-video w-full h-full">
                <MuxPlayerReact
                  playbackId={asset_data?.playback_ids[0]?.id}
                  onPlay={() => console.log("Playback started")}
                  onPause={() => console.log("Playback paused")}
                  onEnded={() => console.log("Playback ended")}
                  className="w-full h-full"
                  accentColor="#5968AD"
                />
              </div>
            </div>

            {/* Creator Notes Section */}
            <div className="mt-8">
              <h2 className="instrument text-2xl mb-2">Creator Notes</h2>
              <div className="rounded-md">
                <p className="italic">
                  This is one of our favorite productions. We hope you enjoy
                  watching it as much as we enjoyed making it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { movieId } = context.params || {};

  if (!movieId || typeof movieId !== "string") {
    return {
      notFound: true,
    };
  }

  try {
    // Get movie data from the database
    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      return {
        notFound: true,
      };
    }

    // Initialize Mux
    const mux_env = new mux({
      tokenId: process.env.MUX_TOKEN_ID!,
      tokenSecret: process.env.MUX_TOKEN_SECRET!,
    });

    // Fetch asset data from Mux
    let asset_data;
    try {
      asset_data = await mux_env.video.assets.retrieve(movie.assetId);
    } catch (error) {
      console.log(error);
      return {
        props: {
          movie: JSON.parse(JSON.stringify(movie)),
        },
      };
    }
    return {
      props: {
        movie: JSON.parse(JSON.stringify(movie)),
        asset_data: JSON.parse(JSON.stringify(asset_data)),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default Watch;
