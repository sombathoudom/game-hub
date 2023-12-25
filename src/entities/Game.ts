import { Platform } from "./Platform";
import { Genre } from "./Genre";
import { Publisher } from './Publishers';
export default interface Game {
  id: number;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform; }[]; //obj in obj
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
  description_raw: string;
}
