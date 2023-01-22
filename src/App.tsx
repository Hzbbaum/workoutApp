import React, { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import {
  CurrentlySelectedWorkout,
  Workout,
  WorkoutIdentifier,
  workoutPlanToCurrentWorkout,
} from "./data/plan";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  selectCurrentWorkoutName,
  setActiveWorkout,
} from "./store/currentWorkoutSlice";

function App() {
  const select = useAppSelector;
  const activeWorkoutName = select(selectCurrentWorkoutName);

  // const timer = (
  //   <div>
  //     time for excercise:
  //     <button>GO!</button>
  //   </div>
  // );
  // const target = <div>your target number of reps</div>;

  // function advanceExcercise(e: React.BaseSyntheticEvent) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   if (currentWorkout !== undefined) {
  //     setCurrentWorkout({
  //       ...currentWorkout,
  //       currentExcerciseIndex: currentWorkout.currentExcerciseIndex + 1,
  //     });
  //   }
  // }

  return (
    <div className="App flex min-h-screen flex-col bg-slate-700/50">
      <Header />
      <main className="container mx-auto flex-grow pt-6 font-semibold">
        <h1>your selected workout is: {activeWorkoutName}</h1>
        <Home />
        {/* <h2>
          {
            currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex]
              .name
          }
        </h2>
        <h3>
          you should aim for{" "}
          {
            currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex]
              .repStart
          }{" "}
          -{" "}
          {
            currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex]
              .repsEnd
          }{" "}
          {currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex]
            .timed
            ? "seconds"
            : "reps"}
        </h3>
        {currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex]
          .timed
          ? timer
          : target}
        <button onClick={advanceExcercise}> next!</button> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
