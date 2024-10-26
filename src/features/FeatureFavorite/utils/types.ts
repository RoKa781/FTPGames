import { IGame, TStatus } from './../../../shared/types/types';

export interface IFavoriteState  {
    favorites: IGame[];
    isLoading: TStatus;
    error: string | null;
}

export interface FavoriteArticleProps {
    favorite: IGame;
}