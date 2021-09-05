import { ThunkAction } from "redux-thunk";
import { Launch } from "../../api/resources/launches";

import { ApplicationState } from "../application-state";

import { Api } from "../../api";

type Action = LoadLaunchesRequest | LoadLaunchesSuccess | LoadLaunchesError;

type Thunk<T = void> = ThunkAction<T, ApplicationState, Api, Action>;

/* ------------- Actions ------------- */
export const LOAD_LAUNCHES_REQUEST = "LOAD_LAUNCHES_REQUEST";
export const LOAD_LAUNCHES_SUCCESS = "LOAD_LAUNCHES_SUCCESS";
export const LOAD_LAUNCHES_ERROR = "LOAD_LAUNCHES_ERROR";

/* ------------- initial state ------------- */
export interface State {
  loading: boolean;
  error: boolean;
  offset: number;
  data: Array<Launch>;
}

export const initialState: State = {
  loading: false,
  error: false,
  offset: 0,
  data: [],
};

/* ------------- Reducer ------------- */
export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case LOAD_LAUNCHES_REQUEST:
      return { ...state, loading: true };

    case LOAD_LAUNCHES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };

    case LOAD_LAUNCHES_ERROR:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/* ------------- Action Creators ------------- */

interface LoadLaunchesRequest {
  type: typeof LOAD_LAUNCHES_REQUEST;
}

export function loadLaunchesRequest(): LoadLaunchesRequest {
  return { type: LOAD_LAUNCHES_REQUEST };
}

interface LoadLaunchesSuccess {
  type: typeof LOAD_LAUNCHES_SUCCESS;
  payload: Array<Launch>;
}

export function loadLaunchesSuccess(
  result: Array<Launch>
): LoadLaunchesSuccess {
  return { type: LOAD_LAUNCHES_SUCCESS, payload: result };
}

interface LoadLaunchesError {
  type: typeof LOAD_LAUNCHES_ERROR;
}

export function loadLaunchesError(): LoadLaunchesError {
  return { type: LOAD_LAUNCHES_ERROR };
}

/* ------------- Thunks ------------- */
export function loadLaunches(startDate: string,endDate: string, offSet: number): Thunk<void> {
  return async (dispatch, getState, api) => {
    try {
      dispatch(loadLaunchesRequest());
      const result = await api.launches.getLaunches(startDate,endDate, offSet);
      console.log(result)
      dispatch(loadLaunchesSuccess(result.results));
    } catch (err) {
      console.log(err)
      dispatch(loadLaunchesError());
    }
  };
}

/* ------------- Selectors ------------- */
export function launchesSelector(state: ApplicationState): State {
  return state.launches;
}
