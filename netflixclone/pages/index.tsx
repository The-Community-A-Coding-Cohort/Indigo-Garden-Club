import {getSession, signOut} from 'next-auth/react';
import {NextPageContext} from 'next';
import useCurrentUser from '../hooks/useCurrentUser';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList'
<<<<<<< HEAD
=======
import useMovieList from '../hooks/useMovieList';
import useFavorites from '../hooks/useFavorites';
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
<<<<<<< HEAD
  const { data: user } = useCurrentUser();
  const movieData = [
    {title: "hello world", item: []},
  ]
=======
  // const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)
  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-48'>
<<<<<<< HEAD
        <MovieList title='Trending Now' data={movieData}/>
=======
        <MovieList title='Trending Now' data={movies}/>
        <MovieList title='My List' data={favorites}/>
>>>>>>> c26c5d4 (stored changes I'm not going to lose them again, damn NavBar section)
      </div>
    </>
  )
}