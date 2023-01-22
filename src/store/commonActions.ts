import { createAction } from "@reduxjs/toolkit";
import { CurrentlySelectedWorkout } from "../data/plan";

export const setActiveWorkout =
  createAction<CurrentlySelectedWorkout>("SET_ACTIVE_WORKOUT");
export const abandonWorkout = createAction("ABANDON_WORKOUT");

