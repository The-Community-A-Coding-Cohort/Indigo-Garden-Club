import {getSession, signOut} from 'next-auth/react';
import {NextPageContext} from 'next';
import useCurrentUser from '../hooks/useCurrentUser';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import MovieList from '../components/MovieList'

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
  const { data: user } = useCurrentUser();
  const movieData = [
    {title: "hello world", item: []},
  ]
  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-48'>
        <MovieList title='Trending Now' data={movieData}/>
      </div>
    </>
  )
}