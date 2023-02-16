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
    <div className="flex flex-col bg-indigo-200/20 shadow-xl shadow-indigo-200">
      {/* <button>back</button> */}
      <div className="basis-full self-end text-sm font-normal">
        <span className="inline">
          next up:
          {isLast
            ? "FINISH"
            : activeWorkout?.excerciseList[
                activeWorkout.currentExcerciseIndex + 1
              ].name}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <h3 className="self-center font-dosis font-extralight text-xl uppercase">{currentSet?.name}</h3>
      <div>
        {" "}
        your target is: {currentSet?.repStart} to {currentSet?.repsEnd}
      </div>



      <button onClick={handleNextExcercise}>next</button>
    </div>
  );
}

export default CurrentExcerciseView;
