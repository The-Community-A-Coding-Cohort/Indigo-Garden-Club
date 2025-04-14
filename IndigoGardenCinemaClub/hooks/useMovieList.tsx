import useSWR from "swr";
import { getData } from "../lib/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = useSWR("/api/movies", getData, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // Deduplicate requests with the same key in 1 minute timeframe
    focusThrottleInterval: 60000, // Only revalidate once per minute if refocused (although revalidateOnFocus is false)
    loadingTimeout: 3000, // Show loading state only if fetch takes more than 3 seconds
    errorRetryInterval: 5000, // Retry on error after 5 seconds
    errorRetryCount: 3, // Maximum of 3 retries on error
  });
  console.log(data)
  return { data, error, isLoading };
};
export default useMovieList;
