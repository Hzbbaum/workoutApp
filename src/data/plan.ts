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

export type ActiveWorkout = {
  excerciseList: Excercise[];
  currentExcerciseIndex: number;
};

function workoutPlanToCurrentWorkout(plan: Set[]): ActiveWorkout {
  return {
    excerciseList: plan
      .flatMap((set) => set)
      .map((set): Excercise[] =>
        Array(set.sets)
          .fill([])
          .map((item) => [...set.moves])
          .flat()
      )
      .flatMap((ex) => ex),
    currentExcerciseIndex: 0,
  };
}

export { workoutPlanToCurrentWorkout };
