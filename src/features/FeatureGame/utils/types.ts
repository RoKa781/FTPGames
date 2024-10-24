import { IGame, TStatus } from "../../../shared/types/types";

export interface IGameState {
  game: IGame | null;
  isLoading: TStatus;
  error: string | null;
}