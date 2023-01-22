import React, { useEffect, useState } from "react";
import { Workout, workoutPlanToCurrentWorkout } from "../../data/plan";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectCurrentWorkout, setActiveWorkout } from "../../store/currentWorkoutSlice";
import WorkoutSelectInput from "./WorkoutSelectInput";

function Home() {
  const [availableWorkoutsList, setAvailableWorkoutNamesList] = useState<
    Workout[]
  >([]);

  const select = useAppSelector;
  const selectedWorkout = useAppSelector(selectCurrentWorkout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      let sampleWorkoutList = await import(
        "../../data/mockData/sampleWorkoutList"
      );
      setAvailableWorkoutNamesList(sampleWorkoutList.default);
    };
    getData().catch((e) => console.log(e));
  }, []);

  function updateWorkoutHandler(workoutId: number) {
    const selectedWorkout = availableWorkoutsList.find(
      (workout) => workout.id === workoutId
    );
    if (selectedWorkout) {
      dispatch(setActiveWorkout(workoutPlanToCurrentWorkout(selectedWorkout)));
    }
  }

  return (
    <div>
      {/* <h2>Choose Your Workout:</h2> */}
      <WorkoutSelectInput
        updateSelectedWorkout={updateWorkoutHandler}
        selectedWorkout={selectedWorkout}
        workoutList={availableWorkoutsList}
      />
    </div>
  );
}

export default Home;
