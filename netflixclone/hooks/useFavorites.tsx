import useSWR from "swr";
import { getData } from "../lib/fetcher";

const useFavorites = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/favorites', getData, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    return {data, error, isLoading, mutate};
}

export default useFavorites;