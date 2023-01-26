import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setState, AppStates } from "../../../store/appStateSlice";
import {
  selectCurrentWorkout,
  selectCurrentWorkoutExcercise,
} from "../../../store/currentWorkoutSlice";
import ExerciseItem from "./ExerciseItem";

function WorkoutOverView() {
  const chosenWorkout = useAppSelector(selectCurrentWorkout);

  const dispatch = useAppDispatch();
  function startWorkoutHandler() {
    dispatch(setState(AppStates.IN_WORKOUT));
  }

  return (
    <div>
      <button onClick={startWorkoutHandler}>Start Workout!</button>
      <ul>
        {chosenWorkout?.excerciseList.map((excercise, index) => (
          <ExerciseItem excerciseItem={excercise} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default WorkoutOverView;
