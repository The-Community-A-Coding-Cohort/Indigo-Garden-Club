import MovieList from "../components/MovieList";
import useMovieList from "../hooks/useMovieList";

export async function getServerSideProps() {
  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/auth',
  //       permanent: false
  //     }
  //   }
  // }

  return {
    props: {},
  };
}

export default function Home() {
  // const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMovieList();
  return (
    <div>
      <div>
        <div
          className="px-4 pb-2 pt-4 flex flex-row items-center justify-between gap-3 border-b border-foreground border-opacity-20:w
        "
        >
          <h1 className=" text-3xl ">Indigo Garden Cinema Club</h1>
          <div className="flex flex-row items-center gap-3">
            <p className="text-3xl instrument">New Release Every Friday</p>
          </div>
        </div>
      </div>
      <MovieList data={movies} />
    </div>
  );
}
