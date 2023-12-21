import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //obj in obj
  metacritic: number;
  rating_top: number;
  rating: number;
}
const useGames = (
  gameQuery: GameQuery
) =>
  useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },}),
      getNextPageParam: (lastPage, allPages) => {
        return  lastPage.next ? allPages.length + 1 : undefined
      }
    });
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
