import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setState, AppStates } from "../../store/appStateSlice";
import {
  selectCurrentWorkout,
  selectCurrentWorkoutExcercise,
} from "../../store/currentWorkoutSlice";

function WorkoutOverView() {
  
  const dispatch = useAppDispatch();
  function startWorkoutHandler() {
    dispatch(setState(AppStates.IN_WORKOUT));
  }

  return (
    <div>
      <button onClick={startWorkoutHandler}>Start Workout!</button>
    </div>
  );
}

export default WorkoutOverView;
