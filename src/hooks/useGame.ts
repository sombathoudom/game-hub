import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import {Game} from "../hooks/useGames";

const apiClient = new APIClient<Game>("/games");
const useGame = (slug:string) => useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
})

export default useGame;