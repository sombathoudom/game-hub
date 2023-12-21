import usePlatforms from "./usePlatforms";
import {GameQuery} from "../App";
const usePlatform = (id?:number) => {
    const {data: platforms} = usePlatforms();
    const platform = platforms?.results.find(platform => platform.id === id);
    return platform
}
export default usePlatform;