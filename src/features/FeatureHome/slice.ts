import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EStatus, IGame } from "../../shared/types/types";
import { fetchFilterGames } from "../../shared/api/api";
import { RootState } from "../../app/store/store";
import { IHomeState, IFilterQuery } from "./utils/types";

const initialState: IHomeState = {
  games: [],
  isLoading: EStatus.IDLE,
  error: null,
  searchQuery: {
    platform: '',
    tags: [],
    sortBy: '',
  },
};

export const fetchFilterGamesThunk = createAsyncThunk<IGame[], IFilterQuery>(
  "home/fetchFilterGames",
  async (filterQuery) => {
    const games = await fetchFilterGames(filterQuery);
    return games;
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFilterQuery>) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilterGamesThunk.pending, (state) => {
        state.isLoading = EStatus.LOADING;
        state.error = null;
      })
      .addCase(fetchFilterGamesThunk.fulfilled, (state, action) => {
        state.isLoading = EStatus.SUCCEEDED;
        state.games = action.payload;
      })
      .addCase(fetchFilterGamesThunk.rejected, (state, action) => {
        state.games = [];
        state.isLoading = EStatus.FAILED;
        state.error = action.error.message || "null";
      });
  },
});

export const { setFilter } = filterSlice.actions;
export const selectQuery = (state: RootState) => state.filter.searchQuery;
export const selectGames = (state: RootState) => state.filter.games;
export const selectIsLoading = (state: RootState) => state.filter.isLoading;
export const selectError = (state: RootState) => state.filter.error;
export default filterSlice.reducer;

