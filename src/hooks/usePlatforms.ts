// import useData from "./useData"
import { useQuery } from "@tanstack/react-query";
import platformData from "../data/platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
export interface Platform {
    id: number
    name: string
    slug: string
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatforms = () => ({data:platformData, isLoading:false, error:null});
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
        // apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => {
        //     return res.data
        // }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platformData
})
export default usePlatforms;