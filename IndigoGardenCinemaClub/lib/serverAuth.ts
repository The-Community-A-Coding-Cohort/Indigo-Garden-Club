import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";

// import prismadb from "./prismadb";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(`in serverAuth requests begin`)
  // if(req.method == 'POST'){
  //     console.log(req);
  // }
  // console.log(`in serverAuth requests end`)
  const session = await getServerSession(req, res, authOptions);
  console.log(session?.user?.name);
  console.log(
    `serverAuth.ts call from ${req.url} : ${
      req.method
    } : throw error?: ${!session?.user?.email}`
  );
  // console.log(`in serverAuth throw error?: ${!session?.user?.email}`);
  // console.log(session);

  // if (!session?.user?.email) {
  //     throw new Error(`User session is missing. Session data: ${JSON.stringify(session)}`);
  // }

  //   const currentUser = await prismadb.user.findUnique({
  //     where: {
  //       email: session.user.email,
  //     },
  //   });

  //   if (!currentUser) {
  //     throw new Error("Not signed in");
  //   }

  return {};
};

export default serverAuth;
