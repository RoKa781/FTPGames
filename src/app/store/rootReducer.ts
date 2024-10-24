import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "../../features/FeatureHome/slice";
import { gameSlice } from "../../features/FeatureGame/slice";

const rootReducer = combineReducers({
    [homeSlice.name]: homeSlice.reducer,
    [gameSlice.name]: gameSlice.reducer,
});

export default rootReducer;
