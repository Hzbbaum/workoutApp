import { Progressions } from "./ProgressionEnum";
import { Set } from "./plan";

const sampleWorkout: Set[] = [
  {
    moves: [
      {
        progression: Progressions.birdDog,
        name: "first",
        repStart: 2,
        repsEnd: 5,
        restTime: 7,
        timed: false,
        eachSide: false,
        gif: "",
        instructions: "just do it",
        link: undefined,
      },
    ],
    sets: 1,
  },
  {
    moves: [
      {
        progression: Progressions.deadBug,
        name: "second",
        repStart: 2,
        repsEnd: 5,
        restTime: 7,
        timed: true,
        eachSide: false,
        gif: "",
        instructions: "just do it",
        link: undefined,
      },
    ],
    sets: 2,
  },
  {
    moves: [
      {
        progression: Progressions.gluteBridge,
        name: "third",
        repStart: 2,
        repsEnd: 5,
        restTime: 7,
        timed: false,
        eachSide: true,
        gif: "",
        instructions: "just do it",
        link: undefined,
      },
      {
        progression: Progressions.pushup,
        name: "fourth",
        repStart: 2,
        repsEnd: 5,
        restTime: 7,
        timed: false,
        eachSide: true,
        gif: "",
        instructions: "just do it",
        link: undefined,
      },
    ],
    sets: 3,
  },
];
export { sampleWorkout };
