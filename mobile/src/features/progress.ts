import {action, Action, createContextStore} from 'easy-peasy';
import {getLastProgress, storeLastProgress} from '../services/progress';
import {ReadProgress} from '../types/progress';

export interface ProgressState {
  lastProgress?: ReadProgress;
}

export interface ProgressModel {
  progress: ProgressState;
  setLastProgress: Action<ProgressModel, ProgressState>;
}

export const ProgressStore = createContextStore<ProgressModel>({
  progress: {},
  setLastProgress: action((state, payload) => {
    state.progress.lastProgress = payload.lastProgress;
    if (payload.lastProgress) {
      storeLastProgress(payload.lastProgress);
    }
  }),
});