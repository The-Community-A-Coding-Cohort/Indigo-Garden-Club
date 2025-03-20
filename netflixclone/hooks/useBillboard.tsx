import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useBillboard = () => {
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })
    // console.log(data) // todo enable and you'll notice a lot of rerendering
    return {data, error, isLoading};
}
export default useBillboard;