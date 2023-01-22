import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { abandonWorkout, setActiveWorkout } from "./commonActions";
export enum AppStates {
  UNITIALIZED = "unintialized",
  PENDING = "pending",
  IN_WORKOUT = "inWorkout",
  SUSPENDED = "suspended",
  COMPLETE = "complete",
}

export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    value: AppStates.UNITIALIZED,
  },
  reducers: {
    setState: (state, action: PayloadAction<AppStates>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setActiveWorkout, (state, action) => {
      state.value = AppStates.PENDING;
    });
    builder.addCase(abandonWorkout, (state) => {
      state.value = AppStates.UNITIALIZED;
    });
  },
});

export const selectAppState = (state: RootState) => state.appState.value;
export const { setState } = appStateSlice.actions;
export default appStateSlice.reducer;
