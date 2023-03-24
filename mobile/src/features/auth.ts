import {action, Action, createStore, createTypedHooks} from 'easy-peasy';

export interface AuthState {
  userToken?: string;
}

export interface AuthModel {
  auth: AuthState;
  setToken: Action<AuthModel, AuthState>;
}

export const store = createStore<AuthModel>({
  auth: {},
  setToken: action((state, payload) => {
    state.auth.userToken = payload.userToken;
  }),
});

const typedHooks = createTypedHooks<AuthModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
