import useSWR from "swr";
import { getData } from "../lib/fetcher";

const useMovieList = () => {
    const { data, error, isLoading } = useSWR('/api/movies', getData, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {data, error, isLoading};
}
export default useMovieList;