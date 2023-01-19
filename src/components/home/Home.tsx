import React from "react";
import { WorkoutIdentifier } from "../../data/plan";

function Home(props: {
  updateSelectedWorkout: (id: number) => void;
  selectedWorkout: number|undefined;
  workoutList: WorkoutIdentifier[];
}) {
  function handleValueChange(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    props.updateSelectedWorkout(e.target.value);
  }

  return (
    <div>
      <h2>Choose Your Workout:</h2>
      <select
        id="workouts"
        value={props.selectedWorkout}
        onChange={handleValueChange}
      >
        {props.workoutList.map((workout) => (
          <option value={workout.id} key={workout.id} label={workout.name}>
          </option>
        ))}
      </select>
    </div>
  );
}

export default Home;
