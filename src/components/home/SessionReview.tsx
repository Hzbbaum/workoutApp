import React from "react";
import { useAppDispatch } from "../../hooks";
import { AppStates, selectAppState, setState } from "../../store/appStateSlice";

function SessionReview() {
  const dispatch = useAppDispatch();

  function dispatchReviewComplete() {
    dispatch(setState(AppStates.PENDING));
  }
  return (
    <div>
      <button onClick={dispatchReviewComplete}>Review complete</button>
    </div>
  );
}

export default SessionReview;
