import { Progressions } from "./ProgressionEnum";
import { Workout } from "../plan";

const sampleWorkout1: Workout = {
  id: 1,
  name: "sample workout 1",
  superSets: [
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
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
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
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
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
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
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
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
          instructions: "just do it",
          link: undefined,
        },
      ],
      sets: 3,
    },
  ],
};
export { sampleWorkout1 };

const sampleWorkout2: Workout = {
  id: 2,
  name: "sample workout 2",
  superSets: [
    {
      moves: [
        {
          progression: Progressions.birdDog,
          name: "first2",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: false,
          eachSide: false,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
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
          name: "second2",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: true,
          eachSide: false,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
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
          name: "third2",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: false,
          eachSide: true,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
          instructions: "just do it",
          link: undefined,
        },
        {
          progression: Progressions.pushup,
          name: "fourth2",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: false,
          eachSide: true,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
          instructions: "just do it",
          link: undefined,
        },
      ],
      sets: 3,
    },
  ],
};
export { sampleWorkout2 };

const sampleWorkout3: Workout = {
  id: 3,
  name: "sample workout 3",
  superSets: [
    {
      moves: [
        {
          progression: Progressions.birdDog,
          name: "first3",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: false,
          eachSide: false,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
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
          name: "second3",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: true,
          eachSide: false,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
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
          name: "third3",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: false,
          eachSide: true,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
          instructions: "just do it",
          link: undefined,
        },
        {
          progression: Progressions.pushup,
          name: "fourth3",
          repStart: 2,
          repsEnd: 5,
          restTime: 7,
          timed: false,
          eachSide: true,
          gif: "https://media.tenor.com/uPAgzN8lEHYAAAAj/push-up-pompe.gif",
          instructions: "just do it",
          link: undefined,
        },
      ],
      sets: 3,
    },
  ],
};
export { sampleWorkout3 };
