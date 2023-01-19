import { Workout } from "../plan";

export default await getWorkoutList();

async function getWorkoutList(): Promise<Workout[]> {
  return import("./sampleWorkout").then((module) => {
    let exportedVar: any[] = [];
    const { ...rest }: { [s: string]: Workout } = module;
    Object.keys(rest).forEach((key) => {
      exportedVar.push(rest[key]);
    });
    return exportedVar;
  });
}
