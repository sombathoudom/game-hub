import useData from "./useData"
import platformData from "../data/platform"
import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/api-client";
import {FetchResponse} from "./useData";
export interface Platform {
    id: number
    name: string
    slug: string
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
// const usePlatforms = () => ({data:platformData, isLoading:false, error:null});
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => 
        apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => {
            return res.data
        }),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: platformData.length, results: platformData}
})
export default usePlatforms;