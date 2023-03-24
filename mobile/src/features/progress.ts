import {action, Action, createContextStore} from 'easy-peasy';
import {ReadProgress} from '../types/progress';
import {Section} from '../types/section';

export interface ProgressState {
  lastSection?: Section;
  progresses: ReadProgress[];
}

export interface ProgressModel {
  progress: ProgressState;
  setLastSection: Action<ProgressModel, Section>;
  setProgress: Action<ProgressModel, ReadProgress>;
}

export const ProgressStore = createContextStore<ProgressModel>({
  progress: {progresses: []},
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
  setLastSection: action((state, payload) => {
    state.progress.lastSection = payload;
  }),
});
