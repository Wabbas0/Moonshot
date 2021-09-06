import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

import * as launches from "../../redux/modules/launches";

import api from "../../api";

const mockData = jest.mock("launches");

const mockStore = configureStore([thunk.withExtraArgument(api)]);

const axiosMock = new AxiosMockAdapter(axios);

const store = mockStore({
  launches: {
    loading: false,
    error: false,
    offset: 0,
    data: [],
  },
});

describe("Invoices actions", () => {
  afterEach(() => {
    store.clearActions();
  });

  it("dispatches LOAD_INVOICES_REQUEST correctly", () => {
    store.dispatch(launches.loadLaunchesRequest());

    const expectedActions = [{ type: launches.LOAD_LAUNCHES_REQUEST }];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches LOAD_AUTHOR_SUCCESS correctly", () => {
    store.dispatch(launches.loadLaunchesSuccess([]));

    const expectedActions = [
      {
        type: launches.LOAD_LAUNCHES_SUCCESS,
        payload: [],
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("dispatches LOAD_AUTHOR_ERROR correctly", () => {
    store.dispatch(launches.loadLaunchesError());

    const expectedActions = [
      {
        type: launches.LOAD_LAUNCHES_ERROR,
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("fetches author data and dispatch subsequent actions when the response 200", () => {
    axiosMock.onGet("/launch").reply(200, mockData);

    const expectedActions = [
      { type: launches.LOAD_LAUNCHES_REQUEST },
      {
        type: launches.LOAD_LAUNCHES_SUCCESS,
        payload: [],
      },
    ];

    return store.dispatch(launches.loadLaunches("2021-09-5T20:43:53Z", "2021-12-4T20:43:53Z", 0)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
