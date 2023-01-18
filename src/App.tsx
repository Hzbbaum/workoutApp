import React, { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home";
import {
  ActiveWorkout,
  Workout,
  WorkoutIdentifier,
  workoutPlanToCurrentWorkout,
} from "./data/plan";

function App() {
  const [currentWorkout, setCurrentWorkout] = useState<
    ActiveWorkout | undefined
  >(undefined);
  const [workoutNamesList, setWorkoutNamesList] = useState<Workout[]>([]);

  useEffect(() => {
    const getData = async () => {
      let sampleWorkoutList = await import("./data/sampleWorkoutList");
      setWorkoutNamesList((state) => [...sampleWorkoutList.default]);
    };
    getData().catch((e) => console.log(e));
  }, []);

  const timer = (
    <div>
      time for excercise:
      <button>GO!</button>
    </div>
  );
  const target = <div>your target number of reps</div>;

  function updateSelectedWorkout(id: number) {
    const selectedWorkout = workoutNamesList.find(
      workout => workout.id == id
    );
    if (selectedWorkout) {
      setCurrentWorkout(workoutPlanToCurrentWorkout(selectedWorkout));
    }
  }

  function advanceExcercise(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (currentWorkout !== undefined) {
      setCurrentWorkout({
        ...currentWorkout,
        currentExcerciseIndex: currentWorkout.currentExcerciseIndex + 1,
      });
    }
  }

  return (
    <div className="App">
      <h1>your selected workout is: {currentWorkout?.name}</h1>
      <Home
        selectedWorkout={currentWorkout?.id ?? undefined}
        workoutList={workoutNamesList.map((workout): WorkoutIdentifier => {
          return { name: workout.name, id: workout.id };
        })}
        updateSelectedWorkout={updateSelectedWorkout}
      />
      <h2>
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
      {currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex].timed
        ? timer
        : target}
      <button onClick={advanceExcercise}> next!</button>
    </div>
  );
}

export default App;
