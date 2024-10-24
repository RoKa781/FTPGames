import { IGame, TStatus } from "../../../shared/types/types";
import { tagsList } from "./constants";

export type Tag = (typeof tagsList)[number];

export interface Filters {
  platform: string;
  categories: Tag[];
  sortBy: string;
}

export interface SideBarProps {
  onFilterChange: (filters: Filters) => void;
}

export interface IHomeState {
  games: IGame[];
  isLoading: TStatus;
  error: string | null;
}