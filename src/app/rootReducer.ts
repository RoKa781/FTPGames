import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "../features/FeatureHome/slice";

const rootReducer = combineReducers({
    [homeSlice.name]: homeSlice.reducer,
});

export default rootReducer;
