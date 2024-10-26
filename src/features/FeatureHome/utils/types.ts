import { IGame, TStatus } from "../../../shared/types/types";
import { tagsList } from "./constants";

export type Tag = (typeof tagsList)[number];

export interface Filters {
  platform: string;
  categories: Tag[];
  sortBy: string;
}


export type Platform = 'all' | 'browser' | 'pc' | '';
export type SortBy = 'release-date' | 'alphabetical' | 'relevance' | '';

export interface IHomeState {
  games: IGame[];
  isLoading: TStatus;
  error: string | null;
  searchQuery: {
    platform: Platform;
    tags: Tag | Tag[];
    sortBy: SortBy;
  }
}

export interface IFilterQuery {
  platform: Platform;
  tags: Tag | Tag[];
  sortBy: SortBy;
}