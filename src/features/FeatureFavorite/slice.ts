import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFavoriteState } from "./utils/types";
import { IGame } from "../../shared/types/types";
import { fetchGame } from "../../shared/api/api";
import { RootState } from "../../app/store/store";

const initialState: IFavoriteState = {
  favorites: [],
  isLoading: "idle",
  error: null,
};

export const fetchFavoritesGamesThunk = createAsyncThunk<IGame[], void>(
  "favorite/fetchFavorites",
  async () => {
    const favoritesIds = JSON.parse(
      localStorage.getItem("likedItems") || "[]"
    );
    const games = await Promise.all(favoritesIds.map((id: string) => fetchGame(id)));
    return games
  }
);

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesGamesThunk.pending, (state) => {
        state.isLoading = "loading";
      })
      .addCase(fetchFavoritesGamesThunk.fulfilled, (state, action) => {
        state.isLoading = "idle";
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesGamesThunk.rejected, (state, action) => {
        state.isLoading = "idle";
        state.error = action.error.message || null;
      });
  },
});

export const selectFavorites = (state: RootState) => state.favorite.favorites;
export const selectIsLoading = (state: RootState) => state.favorite.isLoading;
export const selectError = (state: RootState) => state.favorite.error;
export default favoriteSlice.reducer;
