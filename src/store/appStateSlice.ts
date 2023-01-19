import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    value: "home",
  },
  reducers: {
    setState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const selectAppState = (state: RootState) => state.appState.value;
export const { setState } = appStateSlice.actions;
export default appStateSlice.reducer;
