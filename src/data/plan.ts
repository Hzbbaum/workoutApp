import { Progressions } from "./mockData/ProgressionEnum";

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
export type WorkoutMetaData = {
  name: string;
  id: number;
  description?: string;
  link?: string;
};

export type Workout = WorkoutMetaData & { superSets: Set[] };

export type CurrentlySelectedWorkout = WorkoutMetaData & {
  excerciseList: Excercise[];
  currentExcerciseIndex: number;
};

function initializeCurrentWorkoutFromPlan(
  selectedWorkout: Workout
): CurrentlySelectedWorkout {
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

export { initializeCurrentWorkoutFromPlan as workoutPlanToCurrentWorkout };
