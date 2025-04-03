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
          className="px-4 xl:px-8 pb-2 pt-8 flex flex-row items-center justify-between gap-3 
        "
        >
          <div className="overlay two">
            <div className="overlay">
              <main>
                <div className="design space-between">
                  <img
                    src="images/flowers.jpg"
                    alt="logo"
                    className="w-1/5 h-1/5 mb-[-20px]"
                  />
                  <div className="center text-xl">
                    <h1>Indigo Garden Cinema Club</h1>
                    <div className="space-container">
                      <span>Surprise</span>
                      <hr />
                      <span>Films</span>
                      <hr />
                      <span>Every</span>
                    </div>
                    <div className="space-container">
                      <span>Thursday</span>
                      <hr />
                      <span>7pm CST</span>
                    </div>
                    <div className="shapes">
                      <div className="oval">
                        <p>Directly</p>
                        <p>Support Artists</p>
                      </div>
                      <div className="square">Be there or be square</div>
                    </div>

                    <div className="footer">
                      <div>
                        <h4>perennial films, always blooming.</h4>
                      </div>
                    </div>
                  </div>
                  <img
                    src="images/flowers.jpg"
                    alt="logo"
                    className="w-1/5 h-1/5 mb-[-20px]"
                  />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      <MovieList data={movies} />
    </div>
  );
}
