import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentlySelectedWorkout } from "../data/plan";
import { RootState } from "../store";

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
    setActiveWorkout: (
      state,
      action: PayloadAction<CurrentlySelectedWorkout>
    ) => {
      state.value = { ...action.payload };
    },
    moveToNextExcercise: (state) => {
      if (state.value === undefined) {
        console.log("cannot move to next excercise on uninitialized workout");
        console.log(state.value);
      } else {
        state.value.currentExcerciseIndex++;
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
});

export const selectCurrentWorkout = (state: RootState) =>
  state.currentWorkout.value;
export const selectCurrentWorkoutExcerciseList = (state: RootState) =>
  state.currentWorkout.value?.excerciseList;
export const selectCurrentWorkoutExcercise = (state: RootState) =>
  state.currentWorkout.value?.excerciseList[
    state.currentWorkout.value?.currentExcerciseIndex
  ];
export const selectCurrentWorkoutStatus = (state: RootState) =>
  state.currentWorkout.value?.workoutStatus;
export const selectCurrentWorkoutName = (state: RootState) =>
  state.currentWorkout.value?.name;

export const { setActiveWorkout, moveToNextExcercise } =
  currentWorkoutSlice.actions;
export default currentWorkoutSlice.reducer;
