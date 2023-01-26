import React from "react";
import { Excercise } from "../../../data/plan";

function ExerciseItem(props: { excerciseItem: Excercise }) {
  return (
    <li className="flex flex-row flex-nowrap py-2 gap-4">
      <div className="aspect-square h-full flex-grow-0">
        <img className="" src={props.excerciseItem.gif} alt="props.excerciseItem.name" />
      </div>
      <div className="flex-grow-1 flex-shrink basis-full">
        <div>{props.excerciseItem.name}</div>
        <p>{props.excerciseItem.instructions}</p>
        <div>
          required range is:{props.excerciseItem.repStart} - {" "}
          {props.excerciseItem.repsEnd}
        </div>
        {props.excerciseItem.eachSide ?? (
          <div>Remember to repeat for each side!</div>
        )}
        <div>{props.excerciseItem.name}</div>
      </div>
    </li>
  );
}

export default ExerciseItem;
