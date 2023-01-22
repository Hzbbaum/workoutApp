import { Listbox } from "@headlessui/react";
import React from "react";
import { CurrentlySelectedWorkout, WorkoutIdentifier } from "../../data/plan";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
function WorkoutSelectInput(props: {
  updateSelectedWorkout: (id: number) => void;
  selectedWorkout: CurrentlySelectedWorkout | undefined;
  workoutList: WorkoutIdentifier[];
}) {
  function handleValueChange(id: number) {
    props.updateSelectedWorkout(id);
  }

  return (
    <Listbox
      value={props.selectedWorkout?.id ?? "please select a value"}
      onChange={handleValueChange}
    >
      <div className="my-8 w-72">
        <Listbox.Button className="relative w-full rounded-md bg-white py-2 px-2 text-left">
          <span className="truncate">
            {props.selectedWorkout?.name || "choose workout"}
          </span>
          <span className="absolute inset-y-0 right-4 flex items-center">
            <ChevronUpDownIcon className="h-5 w-5" />
          </span>
        </Listbox.Button>
        <Listbox.Options className="py4 w-full rounded-md bg-white px-2">
          {props.workoutList.map((workout) => (
            <Listbox.Option key={workout.id} value={workout.id}>
              {workout.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
    // <select
    //   id="workouts"
    //   value={props.selectedWorkout}
    //   onChange={handleValueChange}
    // >
    //   {props.workoutList.map((workout) => (
    //     <option
    //       value={workout.id}
    //       key={workout.id}
    //       label={workout.name}
    //     ></option>
    //   ))}
    // </select>
  );
}

export default WorkoutSelectInput;
