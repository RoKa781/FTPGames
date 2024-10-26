import { combineReducers } from "@reduxjs/toolkit";
import { filterSlice } from "../../features/FeatureHome/slice";
import { gameSlice } from "../../features/FeatureGame/slice";
import { mainSlice } from "../../features/FeatureMain/slice";
import { favoriteSlice } from "../../features/FeatureFavorite/slice";

const rootReducer = combineReducers({
    [filterSlice.name]: filterSlice.reducer,
    [gameSlice.name]: gameSlice.reducer,
    [mainSlice.name]: mainSlice.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer
});

export default rootReducer;
