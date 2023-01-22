import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentlySelectedWorkout } from "../data/plan";
import { RootState } from "../store";
import { abandonWorkout, setActiveWorkout } from "./commonActions";

interface CurrentWorkoutState {
  value: CurrentlySelectedWorkout | undefined;
}
const initialState: CurrentWorkoutState = {
  value: undefined,
};

export const currentWorkoutSlice = createSlice({
  name: "currentWorkout",
  initialState,
  reducers: {
    moveToNextExcercise: (state) => {
      if (state.value === undefined) {
        console.log("cannot move to next excercise on uninitialized workout");
        console.log(state.value);
      } else {
        if (
          state.value.currentExcerciseIndex ===
          state.value?.excerciseList.length
        ) {
          console.log("cannot move to next excercise on last excercise");
          console.log(state.value);
        } else {
          state.value.currentExcerciseIndex++;
        }
      }
    },
    restartWorkout: (state) => {
      if (state.value === undefined) {
        console.log("cannot restart uninitialized workout");
        console.log(state.value);
      } else {
        state.value.currentExcerciseIndex = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setActiveWorkout, (state, action) => {
      state.value = { ...action.payload };
    });
    builder.addCase(abandonWorkout, (state) => {
      state.value = undefined;
    });
  },
});

export const selectCurrentWorkout = (state: RootState) =>
  state.currentWorkout.value;
export const selectCurrentWorkoutExcerciseList = (state: RootState) =>
  state.currentWorkout.value?.excerciseList;
export const selectCurrentWorkoutExcercise = (state: RootState) =>
  state.currentWorkout.value?.excerciseList[
    state.currentWorkout.value?.currentExcerciseIndex
  ];
export const selectCurrentWorkoutName = (state: RootState) =>
  state.currentWorkout.value?.name;
export const selectIsLastExcercise = (state: RootState) =>
  state.currentWorkout.value?.currentExcerciseIndex ===
  Number(state.currentWorkout.value?.excerciseList.length) - 1;

export const { moveToNextExcercise } = currentWorkoutSlice.actions;
export default currentWorkoutSlice.reducer;
