import { useEffect, useState } from "react";
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
  const target = <div></div>;

  return (
    <div className="App">
      <h2>
        {
          currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex]
            .name
        }
      </h2>
      {currentWorkout?.excerciseList[currentWorkout.currentExcerciseIndex].timed
        ? timer
        : ""}
    </div>
  );
}

export default App;
