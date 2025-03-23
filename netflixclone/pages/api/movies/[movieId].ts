import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "../../../lib/prismadb";
import serverAuth from "../../../lib/serverAuth";
import mux from "@mux/mux-node";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mux_env = new mux({
    tokenId: process.env.MUX_TOKEN_ID!,
    tokenSecret: process.env.MUX_TOKEN_SECRET!,
  });

  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    // await serverAuth(req, res);

    const { movieId } = req.query;

    if (typeof movieId !== "string") {
      return new Error("Invalid ID");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movie) {
      return new Error("Invalid ID");
    }

    const asset_data = await mux_env.video.assets.retrieve(movie.assetId);

    return res.status(200).json({ movie, asset_data });
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
