import useData from "./useData"
import platformData from "../data/platform"
export interface Platform {
    id: number
    name: string
    slug: string
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => ({data:platformData, isLoading:false, error:null});
export default usePlatforms;