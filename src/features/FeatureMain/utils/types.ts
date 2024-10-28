import { IGame, TStatus } from "../../../shared/types/types";

export interface GamesListSectionProps {
  label: string;
  link: string;
  data: IGame[];
}

export interface GamesListArticleProps {
  game: IGame;
}

export interface IMainPageState {
  games: IGame[];
  isLoading: TStatus;
  error: string | null;
}
