import { MouseEventHandler, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ActiveWorkout, workoutPlanToCurrentWorkout } from "./data/plan";
import { sampleWorkout } from "./data/sampleWorkout";

function App() {
  const [currentWorkout, setCurrentWorkout] = useState<
    ActiveWorkout | undefined
  >(undefined);
  useEffect(() => {
    setCurrentWorkout(workoutPlanToCurrentWorkout(sampleWorkout));
  }, []);

  const timer = (
    <div>
      time for excercise:
      <button>GO!</button>
    </div>
  );
  const target = <div>your target number of reps</div>;

  function advanceExcercise(e: MouseEventHandler) {
    console.log(e);
    if (currentWorkout !== undefined) {
      setCurrentWorkout({
        ...currentWorkout,
        currentExcerciseIndex: currentWorkout.currentExcerciseIndex + 1,
      });
    }
  }
  return (
    <div className="App">
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
