import axios from "axios";
import { IGame } from "../types/types";

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
