import React from "react";
import { Excercise } from "../../../data/plan";
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
  function secondsToTime(e: number): string {
    const h = Math.floor(e / 3600)
        .toString()
        .padStart(2, "0"),
      m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, "0");

    return (h !== "00" ? h + ":" : "") + m + ":" + s;
    //return `${h}:${m}:${s}`;
  }
  function getWorkoutTimeEstimation(workoutList: Excercise[]) {
    const timeInSeconds = workoutList.reduce(
      (estTime: number, exc): number =>
        estTime +
        ((exc.timed ? exc.repsEnd : exc.repsEnd * 3) + exc.restTime) *
          (exc.eachSide ? 2 : 1),
      0
    );
    return secondsToTime(timeInSeconds);
  }

  return (
    <div>
      <button
        className="mx-20 border border-indigo-500 bg-indigo-500 px-4 py-2 font-dosis text-4xl font-extralight  text-white transition duration-150 hover:bg-white hover:text-indigo-500"
        onClick={startWorkoutHandler}
      >
        Start Workout!
      </button>
      <h2>{chosenWorkout?.name}</h2>
      {chosenWorkout !== undefined ? (
        <span>
          estimated time is:{" "}
          {getWorkoutTimeEstimation(chosenWorkout.excerciseList)}
        </span>
      ) : (
        ""
      )}
      <ul>
        {chosenWorkout?.excerciseList.map((excercise, index) => (
          <ExerciseItem excerciseItem={excercise} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default WorkoutOverView;
