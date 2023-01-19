import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./store/appStateSlice";
import currentWorkoutSlice from "./store/currentWorkoutSlice";

const rootReducer = combineReducers({
  appState: appStateSlice,
  currentWorkout: currentWorkoutSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
