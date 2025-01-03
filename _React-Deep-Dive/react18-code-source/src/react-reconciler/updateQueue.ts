import { Action } from "@/shared/ReactTypes";
import { memo } from "react";
export interface Update<State> {
  action: Action<State>;
}

export interface UpdateQueue<State> {
  shared: {
    pending: Update<State> | null;
  };
}

export const createUpdate = <State>(action: Action<State>): Update<State> => {
  return {
    action,
  };
};

export const createUpdateQueue = <State>(): UpdateQueue<State> => {
  return {
    shared: {
      pending: null,
    },
  };
};

export const enqueueUpdate = <State>(
  updateQueue: UpdateQueue<State>,
  update: Update<State>
) => {
  updateQueue.shared.pending = update;
};

export const processUpdateQueue = <State>(
  baseSate: State,
  pendingUpdate: Update<State> | null
): { memoizedState: State } => {
  const result: ReturnType<typeof processUpdateQueue<State>> = {
    memoizedState: baseSate,
  };

  if (pendingUpdate) {
    const { action } = pendingUpdate;
    if (action instanceof Function) {
      result.memoizedState = action(result.memoizedState);
    } else {
      result.memoizedState = action;
    }
  }

  return result;
};
