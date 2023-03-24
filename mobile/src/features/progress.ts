import {action, Action, createContextStore} from 'easy-peasy';
import {ReadProgress} from '../types/progress';

export interface ProgressState {
  lastProgress?: ReadProgress;
  progresses: ReadProgress[];
}

export interface ProgressModel {
  progress: ProgressState;
  setLastProgress: Action<ProgressModel, ProgressState>;
  setProgress: Action<ProgressModel, ReadProgress>;
}

export const ProgressStore = createContextStore<ProgressModel>({
  progress: {progresses: []},
  setLastProgress: action((state, payload) => {
    state.progress.lastProgress = payload.lastProgress;
  }),
  setProgress: action((state, payload) => {
    const index = state.progress.progresses.findIndex(
      p => p.sectionId === payload.sectionId,
    );
    if (index === -1) {
      state.progress.progresses.push(payload);
    } else {
      state.progress.progresses.splice(index, 1, payload);
    }
  }),
});
