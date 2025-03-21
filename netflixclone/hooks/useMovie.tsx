import useSWR from "swr";
import { getData } from "../lib/fetcher";

const useMovie = (id?: string) => {
    const { data, error, isLoading } = useSWR(`/api/movies/${id}`, getData, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {data, error, isLoading};
}
export default useMovie;