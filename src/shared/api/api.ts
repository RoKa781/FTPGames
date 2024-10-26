import axios from "axios";
import { IGame } from "../types/types";
import { IFilterQuery } from "../../features/FeatureHome/utils/types";

const apiClient = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  timeout: 5000,
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '14bb6535c0mshd9e042c8f1d7e5dp171b9ejsn073f2c8677dc'
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorMsg = error.response?.data?.message || error.message;
    return Promise.reject(new Error(`${errorMsg}`));
  }
);

export const fetchGames = async (): Promise<IGame[]> => {
  return await apiClient.get('/games');
};

export const fetchGame = async (id: string): Promise<IGame> => {
  return await apiClient.get(`/game?id=${id}`)
}

export const fetchFilterGames = async (filters?: IFilterQuery): Promise<IGame[]> => {
  const params = new URLSearchParams();

  if (filters?.platform && filters.platform !== 'all') {
    params.append('platform', filters.platform);
  }

  if (filters?.tags) {
    if (typeof filters.tags === 'string') {
      params.append('category', filters.tags);
    } else if (Array.isArray(filters.tags)) {
      if (filters.tags.length === 1) {
        params.append('category', filters.tags.join(','));
      } else if (filters.tags.length > 1) {
        params.append('tag', filters.tags.join('.'));
      }
    }
  }

  if (filters?.sortBy) {
    params.append('sort-by', filters.sortBy);
  }

  if (filters?.tags && Array.isArray(filters.tags) && filters.tags.length > 1) {
    return await apiClient.get(`/filter?${params.toString()}`);
  } else {
    return await apiClient.get(`/games?${params.toString()}`);
  }
};
