import React from "react";
import { Excercise } from "../../../data/plan";

function ExerciseItem(props: { excerciseItem: Excercise }) {
  return (
    <li className="m-2 flex flex-row flex-nowrap gap-4 bg-indigo-300/50 py-2 pl-4 md:inline-flex md:h-5/6 md:w-48 md:flex-wrap md:justify-center md:py-8 md:pl-0">
      <div className="h-28 flex-grow-0 basis-24 md:basis-3/4">
        <img
          className=""
          src={props.excerciseItem.gif}
          alt="props.excerciseItem.name"
        />
      </div>
      <div className="flex-grow-1 flex-shrink md:flex-grow-0 md:basis-full md:px-4">
        <h3 className="pb-4 text-center font-dosis text-xl font-extralight md:text-3xl">
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
