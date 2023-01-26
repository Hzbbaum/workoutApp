import React, { useEffect, useState } from "react";
import { Workout, workoutPlanToCurrentWorkout } from "../../data/plan";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppStates, selectAppState } from "../../store/appStateSlice";
import { setActiveWorkout } from "../../store/commonActions";
import { selectCurrentWorkout } from "../../store/currentWorkoutSlice";
import CurrentExcerciseView from "./CurrentExcerciseView";
import SessionReview from "./SessionReview";
import WorkoutOverView from "./WorkoutOverview/WorkoutOverView";
import WorkoutSelectInput from "./WorkoutSelectInput";
import WorkoutSuspendedView from "./WorkoutSuspendedView";

function Home() {
  const [availableWorkoutsList, setAvailableWorkoutNamesList] = useState<
    Workout[]
  >([]);

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
  const appState = useAppSelector(selectAppState);

  return (
    <div>
      {(appState === AppStates.UNITIALIZED ||
        appState === AppStates.PENDING) && (
        <WorkoutSelectInput
          updateSelectedWorkout={updateWorkoutHandler}
          selectedWorkout={selectedWorkout}
          workoutList={availableWorkoutsList}
        />
      )}
      {appState === AppStates.COMPLETE && <SessionReview />}
      {appState === AppStates.IN_WORKOUT && <CurrentExcerciseView />}
      {appState === AppStates.PENDING && <WorkoutOverView />}
      {appState === AppStates.SUSPENDED && <WorkoutSuspendedView />}
    </div>
  );
}

export default Home;
