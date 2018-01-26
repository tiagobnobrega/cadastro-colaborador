import { TYPES } from '../actions/actionTypes';
import { handleActions } from 'redux-actions';

// the initial state of this reducer
export const INITIAL_STATE = {
  data: [],
  one: {},
  isFetching: false,
};

export const HANDLERS = {
  [TYPES.EMPLOYEE_REQUEST]: (
    state = INITIAL_STATE,
    { type, payload, meta }
  ) => {
    return { ...state, isFetching: true };
  },
  [TYPES.EMPLOYEE_LIST_SUCCESS]: (
    state = INITIAL_STATE,
    { type, payload, meta }
  ) => {
    return {
      ...state,
      data: payload,
      isFetching: false,
    };
  },
  [TYPES.EMPLOYEE_GET_ONE_SUCCESS]: (
    state = INITIAL_STATE,
    { type, payload, meta }
  ) => {
    return {
      ...state,
      one: payload[0],
      isFetching: false,
    };
  },
};

export default handleActions(HANDLERS, INITIAL_STATE);
