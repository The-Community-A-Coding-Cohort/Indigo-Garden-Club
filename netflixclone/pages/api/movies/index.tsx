import {NextApiRequest, NextApiResponse} from 'next';
<<<<<<< HEAD
=======

import prismadb from '../../../lib/prismadb';
import serverAuth from '../../../lib/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try {
        await serverAuth(req);

        const movies = await prismadb.movie.findMany();

        return res.status(200).json(movies);
    } catch(error){
        console.log(error);
        res.status(400).end();
    }
}
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)
