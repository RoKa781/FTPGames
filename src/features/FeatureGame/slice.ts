import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGameState } from "./utils/types";
import { IGame } from "../../shared/types/types";
import { fetchGame } from "../../shared/api/api";
import { RootState } from "../../app/store/store";

const initialState: IGameState = {
  game: null,
  isLoading: "idle",
  error: null,
};

export const fetchGameThunk = createAsyncThunk<IGame, string>(
  "game/fetchGame",
  async (id) => {
    const game = await fetchGame(id);
    return game;
  }
);

export const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameThunk.pending, (state) => {
        state.isLoading = "loading";
        state.error = null;
      })
      .addCase(fetchGameThunk.fulfilled, (state, action) => {
        state.isLoading = "idle";
        state.game = action.payload;
      })
      .addCase(fetchGameThunk.rejected, (state, action) => {
        state.isLoading = "idle";
        state.error = action.error.message || "Failed to load the game";
      });
  },
});

export const selectGame = (state: RootState) => state.gameSlice.game;
export const selectIsLoading = (state: RootState) => state.gameSlice.isLoading;
export const selectError = (state: RootState) => state.gameSlice.error;
