import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EStatus, IGame } from "../../shared/types/types";
import { fetchGames } from "../../shared/api/api";
import { RootState } from "../../app/store/store";
import { IHomeState } from "./utils/types";

const initialState: IHomeState = {
  games: [],
  isLoading: EStatus.IDLE,
  error: null,
};

export const fetchGamesThunk = createAsyncThunk<IGame[], void>(
  "home/fetchGames",
  async () => {
    const games = await fetchGames();
    return games;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesThunk.pending, (state) => {
        state.isLoading = EStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchGamesThunk.fulfilled, (state, action) => {
        state.isLoading = EStatus.SUCCEEDED;
        state.games = action.payload;
      })
      .addCase(fetchGamesThunk.rejected, (state, action) => {
        state.isLoading = EStatus.FAILED;
        state.error = action.error.message || 'null';
      });
  },
});

export const selectGames = (state: RootState) => state.home.games;
export const selectIsLoading = (state: RootState) => state.home.isLoading;
export const selectError = (state: RootState) => state.home.error;