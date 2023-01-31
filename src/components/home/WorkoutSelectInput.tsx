import { Listbox, Transition } from "@headlessui/react";
import React from "react";
import { CurrentlySelectedWorkout, WorkoutMetaData } from "../../data/plan";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
function WorkoutSelectInput(props: {
  updateSelectedWorkout: (id: number) => void;
  selectedWorkout: CurrentlySelectedWorkout | undefined;
  workoutList: WorkoutMetaData[];
}) {
  function handleValueChange(id: number) {
    props.updateSelectedWorkout(id);
  }

  return (
    <Listbox
      value={props.selectedWorkout?.id ?? "please select a value"}
      onChange={handleValueChange}
      by="id"
    >
      <Listbox.Label className="font-dosis text-2xl font-light">
        Please choose your Workout:
      </Listbox.Label>
      <div className="h-32">
        <Listbox.Button className="relative w-72 py-2 text-left shadow-xl">
          <span className="truncate ">
            {props.selectedWorkout?.name || "..."}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center">
            <ChevronUpDownIcon className="h-6 w-4" />
          </span>
        </Listbox.Button>
        <Transition
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="h-16 w-72 overflow-y-auto bg-white py-2  text-indigo-500 scrollbar scrollbar-track-indigo-500 scrollbar-thumb-indigo-100">
            {props.workoutList.map((workout) => (
              <Listbox.Option
                className="shadow-inner hover:shadow-md"
                key={workout.id}
                value={workout.id}
              >
                {workout.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default WorkoutSelectInput;
