import useSWR from 'swr'
import { api } from '../services/api';

export const useFetcherGet = (url: string) => {
  const {data, error} = useSWR(url, () => {
    const response = api.get(url).then(({data}) => data);

    return response;
  });

  return {data, error};
};
