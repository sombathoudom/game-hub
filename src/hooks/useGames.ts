import useData from "./useData";
import { Genre } from "../hooks/useGener";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";

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
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
