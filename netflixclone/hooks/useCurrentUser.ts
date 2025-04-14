import useSWR from 'swr';

import { getData } from '../lib/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', getData);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser;