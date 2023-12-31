// import useData from "./useData";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse }from "../services/api-client";
import APIClient from "../services/api-client";
import ms from 'ms';
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');
// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: genres
})

export default useGenres;