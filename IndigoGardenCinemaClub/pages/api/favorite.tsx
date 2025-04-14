// import { NextApiRequest, NextApiResponse } from 'next';
// import { without } from 'lodash';
// import prismadb from '../../lib/prismadb';
// import serverAuth from '../../lib/serverAuth';

// export default async function handler(req: NextApiRequest, res: NextApiResponse){
//     try {
//         if(req.method === 'POST'){
//             const { currentUser } = await serverAuth(req, res);
//             // console.log('in favorite.tsx after')
//             const { movieId } = req.body;
//             const existingMovie = await prismadb.movie.findUnique({
//                 where: {
//                     id: movieId,
//                 }
//             });
//             console.log(`in favorite.tsx existingMovie: ${!existingMovie}`)
//             console.log(`in favorite.tsx movieId: ${movieId}`)
//             if(!existingMovie){
//                 throw new Error('Invalid ID');
//             }
    
//             const user = await prismadb.user.update({
//                 where: {
//                     email: currentUser.email || '',
//                 }, 
//                 data: {
//                     favoriteIds: {
//                         push: movieId,
//                     }
//                 }
//             });
//             return res.status(200).json(user);
//         }
//         if(req.method === 'DELETE'){
//             console.log('DELETE in favorite.tsx')
//             const { currentUser } = await serverAuth(req, res);
//             const { movieId } = req.body;
//             const existingMovie = await prismadb.movie.findUnique({
//                 where: {
//                     id: movieId,
//                 }
//             });
//             if(!existingMovie){
//                 throw new Error('Invalid ID');
//             }

//             const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);
//             const user = await prismadb.user.update({
//                 where: {
//                     email: currentUser.email || '',
//                 }, 
//                 data: {
//                     favoriteIds: updatedFavoriteIds,
//                 }
//             });
//             return res.status(200).json(user);
//         }
//         return res.status(405).end();
//     } catch(error){
//         console.log(`in favorite.tsx error thrown: ${error}`);
//         return res.status(400).end();
//     }
// }