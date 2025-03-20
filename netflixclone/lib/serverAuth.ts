import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from './prismadb';

const serverAuth = async (req: NextApiRequest) => {
    
    // console.log(`in serverAuth requests begin`)
    // if(req.method == 'POST'){
    //     console.log(req);
    // }
    // console.log(`in serverAuth requests end`)
    const session = await getSession( {req} );
    console.log(`serverAuth.ts call from ${req.url} : ${req.method} : throw error?: ${!session?.user?.email}`)
    // console.log(`in serverAuth throw error?: ${!session?.user?.email}`);
    // console.log(session);

    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!currentUser) {
        throw new Error('Not signed in');
    }

    return {currentUser}
}

export default serverAuth