// import useData from "./useData"
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platformData from "../data/platform";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";
const apiClient = new APIClient<Platform>('/platforms/lists/parents');
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatforms = () => ({data:platformData, isLoading:false, error:null});
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
        // apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => {
        //     return res.data
        // }),
    staleTime: ms("24h"), // 24 hours
    initialData: platformData
})
export default usePlatforms;