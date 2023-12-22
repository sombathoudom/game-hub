import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStorer from "../store";
import { Platform } from "./usePlatforms";
const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //obj in obj
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
  description_raw:string;
}
const useGames = () => {
  const gameQuery = useGameQueryStorer(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },}),
      getNextPageParam: (lastPage, allPages) => {
        return  lastPage.next ? allPages.length + 1 : undefined
      },
      staleTime: ms("24h"), // 24 hours
    });
  }
    //old style
    //   apiClient.get<FetchResponse<Game>>('/games', {
    //     params: {
    //       genres: gameQuery.genre?.id,
    //       parent_platforms: gameQuery.platform?.id,
    //       ordering: gameQuery.sortOrder,
    //       search: gameQuery.searchText,
    //     },
    //  }).then(res => res.data),
  
  // useData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.sortOrder,
  //       search: gameQuery.searchText,
  //     },
  //   },
  //   [gameQuery]
  // );

export default useGames;
