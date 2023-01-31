import React from "react";
import { Excercise } from "../../../data/plan";

function ExerciseItem(props: { excerciseItem: Excercise }) {
  return (
    <li className="flex flex-row flex-nowrap gap-4 py-2">
      <div className="h-full flex-grow-0 basis-24" >
        <img
          className=""
          src={props.excerciseItem.gif}
          alt="props.excerciseItem.name"
        />
      </div>
      <div className="flex-grow-1 flex-shrink  md:flex-grow-0">
        <h3 className="font-dosis text-xl font-extralight">
          {props.excerciseItem.name}
        </h3>
        <h4 className="text-sm font-normal">
          {props.excerciseItem.repStart} - {props.excerciseItem.repsEnd}{" "}
          {props.excerciseItem.timed ? "seconds" : "reps"}
        </h4>
        {props.excerciseItem.eachSide}
        {props.excerciseItem.eachSide ? (
          <b className="font-semibold">Repeat each side!</b>
        ) : (
          ""
        )}
        <p className="text-sm font-light">{props.excerciseItem.instructions}</p>
      </div>
    </li>
  );
}

export default ExerciseItem;
