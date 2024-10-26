import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMainPageState } from "./utils/types";
import { fetchGames } from "../../shared/api/api";
import { EStatus, IGame } from "../../shared/types/types";
import { RootState } from "../../app/store/store";

const initialState: IMainPageState = {
  games: [],
  isLoading: "idle",
  error: null,
};
export const fetchGamesMainThunk = createAsyncThunk<IGame[], void>(
  "main/fetchGames",
  async () => {
    const games = await fetchGames();
    return games;
  }
);

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGamesMainThunk.pending, (state) => {
        state.isLoading = EStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchGamesMainThunk.fulfilled, (state, action) => {
        state.isLoading = EStatus.SUCCEEDED;
        state.games = action.payload;
      })
      .addCase(fetchGamesMainThunk.rejected, (state, action) => {
        state.isLoading = EStatus.FAILED;
        state.error = action.error.message || "null";
      });
  },
});

export const selectGames = (state: RootState) => state.main.games;
export const selectIsLoading = (state: RootState) => state.main.isLoading;
export const selectError = (state: RootState) => state.main.error;
