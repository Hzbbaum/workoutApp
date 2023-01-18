import { Progressions } from "./ProgressionEnum";

export type Set = {
  moves: Excercise[];
  sets: number;
};

export type Excercise = {
  progression: Progressions;
  name: string;
  repStart: number;
  repsEnd: number;
  restTime: number;
  timed: boolean;
  eachSide: boolean;
  gif?: string;
  instructions?: string;
  link?: string;
};
export type WorkoutIdentifier = {
  name: string;
  id: number;
};
export type Workout = WorkoutIdentifier & { superSets: Set[] };

export type ActiveWorkout = WorkoutIdentifier & {
  excerciseList: Excercise[];
  currentExcerciseIndex: number;
};

function workoutPlanToCurrentWorkout(selectedWorkout: Workout): ActiveWorkout {
  let flattenedSet = selectedWorkout.superSets
    .flatMap((set) => set)
    .map((set): Excercise[] =>
      Array(set.sets)
        .fill([])
        .map((item) => [...set.moves])
        .flat()
    )
    .flatMap((ex) => ex);
  return {
    name: selectedWorkout.name,
    id: selectedWorkout.id,
    excerciseList: flattenedSet,
    currentExcerciseIndex: 0,
  };
}

export { workoutPlanToCurrentWorkout };
