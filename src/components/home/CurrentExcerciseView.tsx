import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppStates, setState } from "../../store/appStateSlice";
import {
  selectCurrentWorkout,
  selectCurrentWorkoutExcercise,
  moveToNextExcercise,
  selectIsLastExcercise,
  selectCurrentWorkoutExcerciseList,
} from "../../store/currentWorkoutSlice";

function CurrentExcerciseView() {
  const dispatch = useAppDispatch();
  const activeWorkout = useAppSelector(selectCurrentWorkout);
  const currentSet = useAppSelector(selectCurrentWorkoutExcercise);
  const isLast = useAppSelector(selectIsLastExcercise);
  function handleNextExcercise() {
    isLast
      ? dispatch(setState(AppStates.COMPLETE))
      : dispatch(moveToNextExcercise());
  }

  return (
    <div>
      {/* <button>back</button> */}
      <span>
        next up:
        {isLast
          ? "FINISH"
          : activeWorkout?.excerciseList[
              activeWorkout.currentExcerciseIndex + 1
            ].name}
      </span>
      <h3>{currentSet?.name}</h3>
      <div>
        {" "}
        your target is: {currentSet?.repStart} to {currentSet?.repsEnd}
      </div>

      <button onClick={handleNextExcercise}> next</button>
    </div>
  );
}

export default CurrentExcerciseView;
