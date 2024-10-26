import { combineReducers } from "@reduxjs/toolkit";
import { filterSlice } from "../../features/FeatureHome/slice";
import { gameSlice } from "../../features/FeatureGame/slice";
import { mainSlice } from "../../features/FeatureMain/slice";

const rootReducer = combineReducers({
    [filterSlice.name]: filterSlice.reducer,
    [gameSlice.name]: gameSlice.reducer,
    [mainSlice.name]: mainSlice.reducer,
});

export default rootReducer;
